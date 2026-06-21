

import React from "react";
import {
  AiOutlineGift,
} from "react-icons/ai";
import {
  MdOutlineLocalOffer,
} from "react-icons/md";
import {
  FiPackage,
  FiShoppingBag,
} from "react-icons/fi";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "./image.png";

const DashboardHeader = () => {
  const { seller } = useSelector((state) => state.seller);

  const iconStyle =
    "text-gray-600 hover:text-red-500 transition duration-300 cursor-pointer";

  return (
    <header className="w-full h-[75px] bg-white border-b shadow-sm sticky top-0 left-0 z-50">
      <div className="h-full flex items-center justify-between px-4 md:px-8">

        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="h-[45px] object-contain"
          />
        </Link>


        {/* Right Section */}
        <div className="flex items-center gap-3 md:gap-5">

          <Link to="/dashboard-coupouns">
            <AiOutlineGift
              size={25}
              className={iconStyle}
            />
          </Link>


          <Link to="/dashboard-events">
            <MdOutlineLocalOffer
              size={25}
              className={iconStyle}
            />
          </Link>


          <Link to="/dashboard-products">
            <FiShoppingBag
              size={25}
              className={iconStyle}
            />
          </Link>


          <Link to="/dashboard-orders">
            <FiPackage
              size={25}
              className={iconStyle}
            />
          </Link>


          <Link
            to="/dashboard-messages"
            className="hidden md:block"
          >
            <BiMessageSquareDetail
              size={25}
              className={iconStyle}
            />
          </Link>


          {/* Seller Avatar */}
          <Link to={`/shop/preview/${seller?._id}`}>
            <img
              src={seller?.avatar?.url}
              alt="seller"
              className="
                w-[45px]
                h-[45px]
                rounded-full
                object-cover
                border-2
                border-red-400
                shadow-md
                hover:scale-105
                transition
              "
            />
          </Link>

        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;