// import React from "react";
// import { AiOutlineFolderAdd, AiOutlineGift } from "react-icons/ai";
// import { FiPackage, FiShoppingBag } from "react-icons/fi";
// import { MdOutlineLocalOffer } from "react-icons/md";
// import { RxDashboard } from "react-icons/rx";
// import { VscNewFile } from "react-icons/vsc";
// import { CiMoneyBill, CiSettings } from "react-icons/ci";
// import { Link } from "react-router-dom";
// import { BiMessageSquareDetail } from "react-icons/bi";
// import { HiOutlineReceiptRefund } from "react-icons/hi";

// const DashboardSideBar = ({ active }) => {
//   return (
//     <div className="w-full h-[90vh] bg-white shadow-sm overflow-y-scroll sticky top-0 left-0 z-10">
//       {/* single item */}
//       <div className="w-full flex items-center p-4">
//         <Link to="/dashboard" className="w-full flex items-center">
//           <RxDashboard
//             size={30}
//             color={`${active === 1 ? "crimson" : "#555"}`}
//           />
//           <h5
//             className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
//               active === 1 ? "text-[crimson]" : "text-[#555]"
//             }`}
//           >
//             Dashboard
//           </h5>
//         </Link>
//       </div>

//       <div className="w-full flex items-center p-4">
//         <Link to="/dashboard-orders" className="w-full flex items-center">
//           <FiShoppingBag
//             size={30}
//             color={`${active === 2 ? "crimson" : "#555"}`}
//           />
//           <h5
//             className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
//               active === 2 ? "text-[crimson]" : "text-[#555]"
//             }`}
//           >
//             All Orders
//           </h5>
//         </Link>
//       </div>

//       <div className="w-full flex items-center p-4">
//         <Link to="/dashboard-products" className="w-full flex items-center">
//           <FiPackage size={30} color={`${active === 3 ? "crimson" : "#555"}`} />
//           <h5
//             className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
//               active === 3 ? "text-[crimson]" : "text-[#555]"
//             }`}
//           >
//             All Products
//           </h5>
//         </Link>
//       </div>

//       <div className="w-full flex items-center p-4">
//         <Link
//           to="/dashboard-create-product"
//           className="w-full flex items-center"
//         >
//           <AiOutlineFolderAdd
//             size={30}
//             color={`${active === 4 ? "crimson" : "#555"}`}
//           />
//           <h5
//             className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
//               active === 4 ? "text-[crimson]" : "text-[#555]"
//             }`}
//           >
//             Create Product
//           </h5>
//         </Link>
//       </div>

//       <div className="w-full flex items-center p-4">
//         <Link to="/dashboard-events" className="w-full flex items-center">
//           <MdOutlineLocalOffer
//             size={30}
//             color={`${active === 5 ? "crimson" : "#555"}`}
//           />
//           <h5
//             className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
//               active === 5 ? "text-[crimson]" : "text-[#555]"
//             }`}
//           >
//             All Events
//           </h5>
//         </Link>
//       </div>

//       <div className="w-full flex items-center p-4">
//         <Link to="/dashboard-create-event" className="w-full flex items-center">
//           <VscNewFile
//             size={30}
//             color={`${active === 6 ? "crimson" : "#555"}`}
//           />
//           <h5
//             className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
//               active === 6 ? "text-[crimson]" : "text-[#555]"
//             }`}
//           >
//             Create Event
//           </h5>
//         </Link>
//       </div>

//       <div className="w-full flex items-center p-4">
//         <Link
//           to="/dashboard-withdraw-money"
//           className="w-full flex items-center"
//         >
//           <CiMoneyBill
//             size={30}
//             color={`${active === 7 ? "crimson" : "#555"}`}
//           />
//           <h5
//             className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
//               active === 7 ? "text-[crimson]" : "text-[#555]"
//             }`}
//           >
//             Withdraw Money
//           </h5>
//         </Link>
//       </div>

//       <div className="w-full flex items-center p-4">
//         <Link to="/dashboard-messages" className="w-full flex items-center">
//           <BiMessageSquareDetail
//             size={30}
//             color={`${active === 8 ? "crimson" : "#555"}`}
//           />
//           <h5
//             className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
//               active === 8 ? "text-[crimson]" : "text-[#555]"
//             }`}
//           >
//             Shop Inbox
//           </h5>
//         </Link>
//       </div>

//       <div className="w-full flex items-center p-4">
//         <Link to="/dashboard-coupouns" className="w-full flex items-center">
//           <AiOutlineGift
//             size={30}
//             color={`${active === 9 ? "crimson" : "#555"}`}
//           />
//           <h5
//             className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
//               active === 9 ? "text-[crimson]" : "text-[#555]"
//             }`}
//           >
//             Discount Codes
//           </h5>
//         </Link>
//       </div>

//       <div className="w-full flex items-center p-4">
//         <Link to="/dashboard-refunds" className="w-full flex items-center">
//           <HiOutlineReceiptRefund
//             size={30}
//             color={`${active === 10 ? "crimson" : "#555"}`}
//           />
//           <h5
//             className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
//               active === 10 ? "text-[crimson]" : "text-[#555]"
//             }`}
//           >
//             Refunds
//           </h5>
//         </Link>
//       </div>

//       <div className="w-full flex items-center p-4">
//         <Link to="/settings" className="w-full flex items-center">
//           <CiSettings
//             size={30}
//             color={`${active === 11 ? "crimson" : "#555"}`}
//           />
//           <h5
//             className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
//               active === 11 ? "text-[crimson]" : "text-[#555]"
//             }`}
//           >
//             Settings
//           </h5>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default DashboardSideBar;

import React from "react";
import {
  AiOutlineFolderAdd,
  AiOutlineGift,
} from "react-icons/ai";

import {
  FiPackage,
  FiShoppingBag,
} from "react-icons/fi";

import { MdOutlineLocalOffer } from "react-icons/md";

import { RxDashboard } from "react-icons/rx";

import { VscNewFile } from "react-icons/vsc";

import {
  CiMoneyBill,
  CiSettings,
} from "react-icons/ci";

import { BiMessageSquareDetail } from "react-icons/bi";

import { HiOutlineReceiptRefund } from "react-icons/hi";

import { Link } from "react-router-dom";


const DashboardSideBar = ({ active }) => {

  const menu = [
    {
      id:1,
      title:"Dashboard",
      icon:<RxDashboard size={24}/>,
      path:"/dashboard"
    },

    {
      id:2,
      title:"Orders",
      icon:<FiShoppingBag size={24}/>,
      path:"/dashboard-orders"
    },

    {
      id:3,
      title:"Products",
      icon:<FiPackage size={24}/>,
      path:"/dashboard-products"
    },

    {
      id:4,
      title:"Add Product",
      icon:<AiOutlineFolderAdd size={24}/>,
      path:"/dashboard-create-product"
    },

    {
      id:5,
      title:"Events",
      icon:<MdOutlineLocalOffer size={24}/>,
      path:"/dashboard-events"
    },

    {
      id:6,
      title:"Add Event",
      icon:<VscNewFile size={24}/>,
      path:"/dashboard-create-event"
    },

    {
      id:7,
      title:"Withdraw",
      icon:<CiMoneyBill size={24}/>,
      path:"/dashboard-withdraw-money"
    },

    {
      id:8,
      title:"Inbox",
      icon:<BiMessageSquareDetail size={24}/>,
      path:"/dashboard-messages"
    },

    {
      id:9,
      title:"Coupons",
      icon:<AiOutlineGift size={24}/>,
      path:"/dashboard-coupouns"
    },

    {
      id:10,
      title:"Refunds",
      icon:<HiOutlineReceiptRefund size={24}/>,
      path:"/dashboard-refunds"
    },

    {
      id:11,
      title:"Settings",
      icon:<CiSettings size={24}/>,
      path:"/settings"
    },

  ];


  return (
    <aside className="
      w-full
      h-screen
      bg-white
      shadow-lg
      px-3
      py-5
      overflow-y-auto
    ">

      <h2 className="
        text-xl
        font-bold
        px-3
        mb-6
        text-gray-800
      ">
        Seller Panel
      </h2>


      <div className="space-y-2">

      {
        menu.map((item)=>(
          <Link
            key={item.id}
            to={item.path}
            className={`
              flex
              items-center
              gap-3
              p-3
              rounded-xl
              transition-all
              duration-300

              ${
                active === item.id
                ?
                "bg-[#588157] text-white shadow-md"
                :
                "text-gray-600 hover:bg-[#a3b18a] hover:text-[#dad7cd]"
              }
            `}
          >

            {item.icon}

            <span className="
              text-[15px]
              font-medium
              hidden md:block
            ">
              {item.title}
            </span>

          </Link>
        ))
      }

      </div>

    </aside>
  );
};


export default DashboardSideBar;