import React from "react";
import { Link } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import { navItems } from "../../static/data";
import { backend_url } from "../../server";
import { useSelector } from "react-redux";


const MobileSidebar = ({
  openSidebar,
  setOpenSidebar,
  searchTerm,
  handleSearchChange,
  isAuthenticated,
  user,
}) => {
   const {isSeller}=useSelector((state)=>state.seller)
   const { allProducts = [] } = useSelector(
  (state) => state.products
 );
  if (!openSidebar) return null;
 

  return (
    <div className="fixed inset-0 z-[9999]">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={() => setOpenSidebar(false)}
      />

      {/* Sidebar */}
      <div className="absolute left-0 top-0 h-full w-[80%] max-w-[320px] bg-white shadow-lg overflow-y-auto">

        {/* Header */}
        <div className="flex justify-end p-4">
          <RxCross1
            size={28}
            className="cursor-pointer"
            onClick={() => setOpenSidebar(false)}
          />
        </div>

        {/* Search */}
        <div className="px-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search Product..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full h-[45px] border border-[#3a5a40] rounded-md px-3 pr-10 focus:outline-none"
            />

            <AiOutlineSearch
              size={20}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600"
            />
          </div>
        </div>
        {/* Search Results */}
{searchTerm.length > 0 && (
  <div className="mt-3 bg-white border rounded-md max-h-[250px] overflow-y-auto shadow-sm">
    {allProducts
      .filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .map((item, index) => {
        const name = item.name.replace(/\s+/g, "-");

        return (
          <Link
            key={index}
            to={`/product/${name}`}
            onClick={() => setOpenSidebar(false)}
          >
            <div className="flex items-center gap-3 p-2 hover:bg-gray-100">
              <img
                src={item.image[0].url}
                className="w-[35px] h-[35px] object-cover rounded"
                alt=""
              />
              <span className="text-sm">{item.name}</span>
            </div>
          </Link>
        );
      })}
  </div>
)}

        {/* Navigation */}
        <div className="mt-8 px-4">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.url}
              onClick={() => setOpenSidebar(false)}
              className="block py-4 text-[17px] font-[500] text-[#333]"
            >
              {item.title}
            </Link>
          ))}
        </div>

        {/* Become Seller */}
        <div className="px-4 mt-4">
          <Link
            to="/create-shop"
            onClick={() => setOpenSidebar(false)}
            className="bg-black text-white h-[45px] rounded-md flex items-center justify-center gap-2"
          >
            {isSeller? "G to Shop":"Become Seller"}
            <IoIosArrowForward />
          </Link>
        </div>

        {/* Bottom User Section */}
        <div className="mt-16 flex justify-center pb-10">
          {isAuthenticated && user ? (
            <Link
              to="/profile"
              onClick={() => setOpenSidebar(false)}
            >
              <img
                src={`${user.avatar.url}`}
                alt="profile"
                className="w-[55px] h-[55px] rounded-full border-2 border-[#3a5a40]"
              />
            </Link>
          ) : (
            <Link
              to="/log-in"
              onClick={() => setOpenSidebar(false)}
              className="text-[18px] font-[500] text-[#555]"
            >
              Login / Sign Up
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;