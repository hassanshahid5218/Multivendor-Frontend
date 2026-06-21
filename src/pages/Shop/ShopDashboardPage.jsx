// import React from "react";
// import DashboardHeader from "../../components/Shop/Layout/DashboardHeader.jsx";
// import DashboardSideBar from "../../components/Shop/Layout/DashboardSideBar.jsx";
// import DashboardHero from "../../components/Shop/DashboardHero.jsx";

// const ShopDashboardPage = () => {
//   return (
//         <div>
//           <DashboardHeader />
//           <div className="flex items-start justify-between w-full">
//             <div className="w-[80px] 800px:w-[330px]">
//               <DashboardSideBar active={1} />
//             </div>
//             <DashboardHero />
//           </div>
//         </div>
//   );
// };

// export default ShopDashboardPage;

import React from "react";
import DashboardHeader from "../../components/Shop/Layout/DashboardHeader.jsx";
import DashboardSideBar from "../../components/Shop/Layout/DashboardSideBar.jsx";
import DashboardHero from "../../components/Shop/DashboardHero.jsx";

const ShopDashboardPage = () => {
  return (
    <div className="min-h-screen bg-[#f2f6ee]">
      {/* Top Header */}
      <DashboardHeader />

      {/* Dashboard Body */}
      <div className="flex w-full">
        {/* Sidebar */}
        <div className="w-[90px] 800px:w-[280px] flex-shrink-0">
          <DashboardSideBar active={1} />
        </div>

        {/* Main Content */}
        <main className="flex-1 overflow-x-hidden">
          <DashboardHero />
        </main>
      </div>
    </div>
  );
};

export default ShopDashboardPage;