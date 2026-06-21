
import React from "react";
import { AiOutlineLogin, AiOutlineMessage } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { HiOutlineReceiptRefund, HiOutlineShoppingBag } from "react-icons/hi";
import {
  MdOutlineAdminPanelSettings,
  MdOutlineTrackChanges,
} from "react-icons/md";
import { TbAddressBook } from "react-icons/tb";
import { RxPerson } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const ProfileSidebar = ({ setActive, active }) => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);

  const logoutHandler = () => {
    axios
      .get(`${server}/user/logout`, { withCredentials: true })
      .then((res) => {
        toast.success(res.data.message);
        window.location.reload(true);
        navigate("/log-in");
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  };

  const menuStyle = (id) =>
    `flex items-center w-full cursor-pointer rounded-xl px-4 py-3 mb-2 transition-all duration-300
     ${
       active === id
         ? "bg-[#588157] text-white shadow-md"
         : "text-gray-600 hover:bg-[#a3b18a] hover:text-[#dad7cd]"
     }`;

  return (
    <div className="w-full bg-white rounded-2xl shadow-lg p-4 border border-gray-100">

      {/* Profile */}
      <div className={menuStyle(1)} onClick={() => setActive(1)}>
        <RxPerson size={22} />
        <span className="pl-3 text-sm sm:text-base font-medium">
          Profile
        </span>
      </div>

      {/* Orders */}
      <div className={menuStyle(2)} onClick={() => setActive(2)}>
        <HiOutlineShoppingBag size={22} />
        <span className="pl-3 text-sm sm:text-base font-medium">
          Orders
        </span>
      </div>

      {/* Refunds */}
      <div className={menuStyle(3)} onClick={() => setActive(3)}>
        <HiOutlineReceiptRefund size={22} />
        <span className="pl-3 text-sm sm:text-base font-medium">
          Refunds
        </span>
      </div>

      {/* Inbox */}
      <div
        className={menuStyle(4)}
        onClick={() => setActive(4) || navigate("/inbox")}
      >
        <AiOutlineMessage size={22} />
        <span className="pl-3 text-sm sm:text-base font-medium">
          Inbox
        </span>
      </div>

      {/* Track Order */}
      <div className={menuStyle(5)} onClick={() => setActive(5)}>
        <MdOutlineTrackChanges size={22} />
        <span className="pl-3 text-sm sm:text-base font-medium">
          Track Order
        </span>
      </div>

      {/* Change Password */}
      <div className={menuStyle(6)} onClick={() => setActive(6)}>
        <RiLockPasswordLine size={22} />
        <span className="pl-3 text-sm sm:text-base font-medium">
          Change Password
        </span>
      </div>

      {/* Address */}
      <div className={menuStyle(7)} onClick={() => setActive(7)}>
        <TbAddressBook size={22} />
        <span className="pl-3 text-sm sm:text-base font-medium">
          Address
        </span>
      </div>

      {/* Admin Dashboard */}
      {user && user?.role === "Admin" && (
        <Link to="/admin/dashboard">
          <div
            className={menuStyle(8)}
            onClick={() => setActive(8)}
          >
            <MdOutlineAdminPanelSettings size={22} />
            <span className="pl-3 text-sm sm:text-base font-medium">
              Admin Dashboard
            </span>
          </div>
        </Link>
      )}

      {/* Logout */}
      <div
        className={menuStyle(9)}
        onClick={logoutHandler}
      >
        <AiOutlineLogin size={22} />
        <span className="pl-3 text-sm sm:text-base font-medium">
          Log Out
        </span>
      </div>
    </div>
  );
};

export default ProfileSidebar;