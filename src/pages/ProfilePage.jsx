

import React, { useState } from "react";
import styles from "../styles/styles";
import Loader from "../components/Layout/Loader.jsx";
import ProfileSideBar from "../components/Profile/ProfileSidebar.jsx";
import ProfileContent from "../components/Profile/ProfileContent.jsx";
import { useSelector } from "react-redux";
import Header from "../components/Layout/header.jsx";

const ProfilePage = () => {
  const { loading } = useSelector((state) => state.user);
  const [active, setActive] = useState(1);

  return (
    <div className="min-h-screen bg-[#f7f8fa]">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />

          <div
            className={`
              ${styles.section}
              flex
              flex-col
              800px:flex-row
              gap-5
              py-5
              800px:py-10
              min-h-screen
            `}
          >
            {/* Sidebar */}
            <div
              className="
                w-full
                800px:w-[335px]
                800px:sticky
                800px:top-5
                self-start
              "
            >
              <ProfileSideBar
                active={active}
                setActive={setActive}
              />
            </div>

            {/* Content Area */}
            <div className="flex-1 w-full">
              <ProfileContent active={active} />
            </div>

          </div>
        </>
      )}
    </div>
  );
};

export default ProfilePage;