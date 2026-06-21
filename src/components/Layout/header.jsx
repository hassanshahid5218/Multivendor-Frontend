
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/styles";
import { categoriesData, productData, navItems } from "../../static/data";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { BiMenuAltLeft } from "react-icons/bi";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { useSelector } from "react-redux";
import DropDown from "./DropDown";
import Navbar from "./Navbar";
import { CgProfile } from "react-icons/cg";
import logo from "./image.png";
import { backend_url } from "../../server";
import Cart from "../Cart/Cart";
import Wishlist from "../Wishlist/Wishlist";
import MobileSidebar from "./MobileSidebar.jsx";
import { getAllProducts } from "../../redux/actions/product";
import { useDispatch } from "react-redux";
export default function Header({ activeHeading }) {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState([]);

  const [active, setActive] = useState(false);
  const [dropDown, setDropDown] = useState(false);

  const [openCart, setOpenCart] = useState(false);
  const [openWishList, setOpenWishList] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);
  
  const searchRef = useRef(null);
  const dispatch=useDispatch();
  
  

  // Scroll effect
  useEffect(() => {
    const onScroll = () => {
      setActive(window.scrollY > 70);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
  const handleClickOutside = (event) => {
    if (
      searchRef.current &&
      !searchRef.current.contains(event.target)
    ) {
      setSearchData([]);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);

  // Search handler
 const { allProducts = [] } = useSelector(
  (state) => state.products
);
 const {cart}=useSelector((state)=>state.cart)
 const {wishlist}=useSelector((state)=>state.wishlist)
 const {isSeller}=useSelector((state)=>state.seller)

useEffect(() => {
  dispatch(getAllProducts());
}, [dispatch]);

const handleSearchChange = (e) => {
  const term = e.target.value;
  setSearchTerm(term);

  const filtered = allProducts.filter((product) =>
    product.name.toLowerCase().includes(term.toLowerCase())
  );

  setSearchData(filtered);
};

  return (
    <>
      {/* MOBILE HEADER */}
      <div className="md:hidden bg-white shadow-sm sticky top-0 z-50">
        <div className="flex items-center justify-between px-4 h-[70px]">

          {/* Menu */}
          <BiMenuAltLeft
            size={32}
            className="cursor-pointer"
            onClick={() => setOpenSidebar(true)}
          />

          {/* Logo */}
          <Link to="/">
            <img src={logo} alt="logo" className="h-[50px]" />
          </Link>

          {/* Icons */}
          <div className="flex items-center gap-4">

            {/* Wishlist */}
            <div
              className="relative cursor-pointer"
              onClick={() => setOpenWishList(true)}
            >
              <AiOutlineHeart size={24} />
              <span className="absolute -top-2 -right-2 bg-[#3bc177] text-white rounded-full w-4 h-4 text-[10px] flex items-center justify-center">
                {wishlist && wishlist.length}
              </span>
            </div>

            {/* Cart */}
            <div
              className="relative cursor-pointer"
              onClick={() => setOpenCart(true)}
            >
              <AiOutlineShoppingCart size={24} />
              <span className="absolute -top-2 -right-2 bg-[#3bc177] text-white rounded-full w-4 h-4 text-[10px] flex items-center justify-center">
                
                {cart && cart.length}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE SIDEBAR */}
      <MobileSidebar
        openSidebar={openSidebar}
        setOpenSidebar={setOpenSidebar}
        searchTerm={searchTerm}
        handleSearchChange={handleSearchChange}
        isAuthenticated={isAuthenticated}
        user={user}
      />

      {/* DESKTOP HEADER */}
      <div className={`${styles.section} py-5 hidden md:block`}>
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="logo" className="h-[65px]" />
          </Link>

          {/* Search */}
          <div ref={searchRef} className="relative w-full max-w-[650px] mx-6">
            <input
              type="text"
              placeholder="Search Product....."
              value={searchTerm}
              onChange={handleSearchChange}
              className="h-[50px] w-full rounded-[10px] border-2 border-[#3a5a40] px-4 pr-[50px] focus:outline-none"
            />

            <AiOutlineSearch
              size={24}
              className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
            />

            {searchData.length !== 0 && (
              <div className="absolute top-[110%] left-0 right-0 bg-white shadow-md rounded-md z-20 p-3">
                {searchData.map((item, index) => (
                  <Link
                    key={index}
                    to={`/product/${item._id}`}
                    onClick={() => setSearchData([])}
                  >
                    <div className="flex items-center gap-3 py-2 hover:bg-gray-100 rounded-md">
                      <img
                        src={item.image[0].url}
                        alt=""
                        className="w-[40px] h-[40px]"
                      />
                      <span>{item.name}</span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Seller */}
          <Link
            to="/create-shop"
            className="bg-black text-white px-6 py-3 rounded-full flex items-center gap-2"
          >
            {isSeller? "Go to Shop":"Become Seller"} <IoIosArrowForward />
          </Link>
        </div>
      </div>

      {/* NAVBAR */}
      <div
        className={`hidden md:block w-full bg-[#3a5a40] ${
          active ? "fixed top-0 left-0 z-10 shadow-sm" : ""
        }`}
      >
        <div
          className={`${styles.section} flex items-center justify-between h-[70px]`}
        >
          {/* Categories */}
          <div className="relative w-[270px]">
            <button className="w-full bg-white h-[50px] rounded-md flex items-center justify-between px-4">
              <div className="flex items-center gap-2">
                <BiMenuAltLeft />
                All Categories
              </div>

              <IoIosArrowDown
                className="cursor-pointer"
                onClick={() => setDropDown(!dropDown)}
              />
            </button>

            {dropDown && (
              <DropDown
                categoriesData={categoriesData}
                setDropDown={setDropDown}
              />
            )}
          </div>

          {/* Nav Items */}
          <Navbar active={activeHeading} />

          {/* Right Icons */}
          <div className="flex items-center gap-6">

            {/* Wishlist */}
            <div
              className="relative cursor-pointer"
              onClick={() => setOpenWishList(true)}
            >
              <AiOutlineHeart size={25} color="white" />
              <span className="absolute -top-2 -right-2 bg-green-500 text-white w-4 h-4 rounded-full text-[10px] flex items-center justify-center">
                {wishlist && wishlist.length}
              </span>
            </div>

            {/* Cart */}
            <div
              className="relative cursor-pointer"
              onClick={() => setOpenCart(true)}
            >
              <AiOutlineShoppingCart size={25} color="white" />
              <span className="absolute -top-2 -right-2 bg-green-500 text-white w-4 h-4 rounded-full text-[10px] flex items-center justify-center">
                {cart && cart.length}
              </span>
            </div>

            {/* Profile / Login */}
            {isAuthenticated && user ? (
              <Link to="/profile">
                <img
                  src={`${user.avatar.url}`}
                  className="w-[35px] h-[35px] rounded-full"
                  alt="profile"
                />
              </Link>
            ) : (
              <Link to="/log-in">
                <CgProfile size={30} color="white" />
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* CART */}
      {openCart && <Cart setOpenCart={setOpenCart} />}

      {/* WISHLIST */}
      {openWishList && (
        <Wishlist setOpenWishlist={setOpenWishList} />
      )}
    </>
  );
}
