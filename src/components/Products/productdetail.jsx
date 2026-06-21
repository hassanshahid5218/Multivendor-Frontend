import React, { useEffect, useState } from "react";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getAllProductsShop } from "../../redux/actions/product.js";
import { server } from "../../server";
import styles from "../../styles/styles";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../redux/actions/wishlist.js";
import { addTocart } from "../../redux/actions/cart.js";
import { toast } from "react-toastify";
import Ratings from "./Ratings";
import axios from "axios";

const getProductKey = (item) => item?._id || `${item?.id}-${item?.name}`;

const ProductDetails = ({ data }) => {
  const { wishlist } = useSelector((state) => state.wishlist);
  const { cart } = useSelector((state) => state.cart);
  const { user, isAuthenticated } = useSelector((state) => state.user);
  const { products } = useSelector((state) => state.products);
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);
  const [select, setSelect] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // console.log("data here",data)
  // console.log("User here",user)
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    
  useEffect(() => {
      if (wishlist && wishlist.find((i) => i._id === data._id)) {
        setClick(true);
      } else {
        setClick(false);
      }
    }, [wishlist]);

  const isEvent =
  data?.start_Date &&
  data?.Finish_Date;

   const image = data?.image || data?.images || [];

  console.log("SHOP DATA:", data?.shop);
useEffect(() => {
  if (data?.shop?._id) {
    dispatch(getAllProductsShop(data.shop._id));
  }
}, [data]);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const removeFromWishlistHandler = (data) => {
    setClick(!click);
    dispatch(removeFromWishlist(data));
  };

  const addToWishlistHandler = (data) => {
    setClick(!click);
    dispatch(addToWishlist(data));
  };

  const addToCartHandler = (product) => {
    const isItemExists =
      cart && cart.find((i) => getProductKey(i) === getProductKey(product));
    if (isItemExists) {
      toast.error("Item already in cart!");
    } else {
      if (data.stock < 1) {
        toast.error("Product stock limited!");
      } else {
        const cartData = { ...data, qty: count };
        dispatch(addTocart(cartData));
        toast.success("Item added to cart successfully!");
      }
    }
  };

  const totalReviewsLength =
    products &&
    products.reduce((acc, product) => acc + product.reviews.length, 0);

  const totalRatings =
    products &&
    products.reduce(
      (acc, product) =>
        acc + product.reviews.reduce((sum, review) => sum + review.rating, 0),
      0
    );

  const avg =  totalRatings / totalReviewsLength || 0;

  const averageRating = avg.toFixed(2);


  const handleMessageSubmit = async () => {
    if (isAuthenticated) {
      const groupTitle = data._id + user._id;
      const userId = user._id;
      const sellerId = data.shop._id;
      await axios
        .post(`${server}/conversation/create-new-conversation`, {
          groupTitle,
          userId,
          sellerId,
        })
        .then((res) => {
          navigate(`/inbox?${res.data.conversation.id}`);
        })
        .catch((error) => {
          toast.error(error.response.data.message);
        });
    } else {
      toast.error("Please login to create a conversation");
    }
  };
   const avgRating =
  data?.reviews?.length > 0
    ? data.reviews.reduce((acc, item) => acc + item.rating, 0) / data.reviews.length
    : 0;
  console.log(data)
  return (
     <div className="bg-gray-50 min-h-screen py-8">
    {data ? (
      <div className={`${styles.section} w-[95%] 1000px:w-[85%] mx-auto`}>
        <div className="w-full bg-white rounded-2xl shadow-md p-4 800px:p-6">
          <div className="w-full flex flex-col 800px:flex-row gap-8 items-start">

            {/* Product Images */}
            <div className="w-full 800px:w-[40%]">
              <div className="w-full bg-gray-100 rounded-xl overflow-hidden border">
                <img
                  src={image?.[select]?.url || image?.[0]?.url}
                  alt=""
                  className="w-full h-[250px] 800px:h-[350px] object-contain"
                />
              </div>

              <div className="flex gap-3 mt-4 overflow-x-auto pb-2">
                {image?.map((i, index) => (
                  <div
                    key={index}
                    className={`min-w-[80px] h-[80px] rounded-lg overflow-hidden border-2 cursor-pointer transition ${
                      select === index
                        ? "border-[#588157]"
                        : "border-gray-200"
                    }`}
                    onClick={() => setSelect(index)}
                  >
                    <img
                      src={`${i?.url}`}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>


            {/* Product Details */}
            <div className="w-full 800px:w-[60%]">

              <h1 className="text-[22px] 800px:text-[28px] font-bold text-gray-900 leading-tight">
                {data.name}
              </h1>


              <p className="text-gray-600 mt-3 text-[15px] leading-6">
                {data.description}
              </p>


              {/* Price */}
              <div className="flex items-center gap-4 mt-6">
                <h4 className="text-[28px] font-bold text-[#3a5a40]">
                  ${data.discountPrice}
                </h4>

                <h3 className="text-[18px] text-gray-400 line-through">
                  {data.originalPrice ? `$${data.originalPrice}` : null}
                </h3>
              </div>


              {/* Quantity & Wishlist */}
              <div className="flex items-center justify-between mt-8">

                {!isEvent && (
                  <div className="flex items-center rounded-lg overflow-hidden border shadow-sm">

                    <button
                      className="w-12 h-12 bg-[#3a5a40] text-white text-xl hover:bg-[#588157] transition"
                      onClick={decrementCount}
                    >
                      -
                    </button>


                    <span className="w-12 text-center font-semibold text-gray-800">
                      {count}
                    </span>


                    <button
                      className="w-12 h-12 bg-[#3a5a40] text-white text-xl hover:bg-[#588157] transition"
                      onClick={incrementCount}
                    >
                      +
                    </button>

                  </div>
                )}


                {!isEvent && (
                  <div className="bg-white p-2 rounded-full shadow-md">

                    {click ? (
                      <AiFillHeart
                        size={30}
                        className="cursor-pointer text-red-500 hover:scale-110 transition"
                        onClick={() => removeFromWishlistHandler(data)}
                        title="Remove from wishlist"
                      />
                    ) : (
                      <AiOutlineHeart
                        size={30}
                        className="cursor-pointer hover:text-red-500 hover:scale-110 transition"
                        onClick={() => addToWishlistHandler(data)}
                        title="Add to wishlist"
                      />
                    )}

                  </div>
                )}

              </div>


              {/* Add to Cart */}
              {!isEvent && (
                <div
                  className="mt-8 w-full h-[50px] rounded-xl bg-[#3a5a40] flex items-center justify-center cursor-pointer shadow-lg hover:shadow-xl hover:scale-[1.01] transition"
                  onClick={() => addToCartHandler(data)}
                >
                  <span className="text-white font-semibold flex items-center text-[16px]">
                    Add to Cart
                    <AiOutlineShoppingCart className="ml-2 text-[20px]" />
                  </span>
                </div>
              )}


              {/* Seller Card */}
              <div className="mt-8 p-4 rounded-xl border bg-gray-50 flex flex-col 800px:flex-row items-start 800px:items-center justify-between gap-4">

                <div className="flex items-center">

                  <Link to={`/shop/preview/${data?.shop._id}`}>
                    <img
                      src={`${data?.shop?.avatar?.url}`}
                      alt=""
                      className="w-[60px] h-[60px] rounded-full object-cover border-2 border-[#22223b]"
                    />
                  </Link>


                  <div className="ml-4">

                    <Link to={`/shop/preview/${data?.shop._id}`}>
                      <h3 className="text-[18px] font-bold text-gray-800">
                        {data.shop.name}
                      </h3>
                    </Link>


                    <h5 className="text-gray-500 mt-1">
                      ({avgRating}/5) Ratings
                    </h5>

                  </div>

                </div>


                <div
                  className="h-[45px] px-5 rounded-lg bg-[#727069] flex items-center justify-center cursor-pointer hover:bg-[#8e8a7b] transition"
                  onClick={handleMessageSubmit}
                >
                  <span className="text-white flex items-center font-medium">
                    Send Message
                    <AiOutlineMessage className="ml-2" />
                  </span>
                </div>

              </div>

            </div>

          </div>
        </div>
                  <div className="mt-8">
          <ProductDetailsInfo
            data={data}
            products={products}
            totalReviewsLength={totalReviewsLength}
            averageRating={averageRating}
          />
        </div>

        <div className="pb-5"></div>
      </div>
    ) : null}
  </div>
);
};

const ProductDetailsInfo = ({
  data,
  products,
  totalReviewsLength,
  averageRating,
}) => {
  const [active, setActive] = useState(1);

  const avgRating =
    data?.reviews?.length > 0
      ? data.reviews.reduce((acc, item) => acc + item.rating, 0) / data.reviews.length
      : 0;

  return (
    <div className="bg-white rounded-2xl shadow-md mt-5 overflow-hidden">

      {/* Tabs */}
      <div className="flex flex-wrap items-center justify-center 800px:justify-start gap-5 800px:gap-10 border-b px-5 800px:px-10 py-5">

        <div className="relative">
          <h5
            className={`text-[16px] 800px:text-[18px] font-semibold cursor-pointer transition ${
              active === 1 ? "text-[#3a5a40]" : "text-gray-600 hover:text-[#588157]"
            }`}
            onClick={() => setActive(1)}
          >
            Product Details
          </h5>

          {active === 1 && (
            <div className="absolute left-0 -bottom-[20px] w-full h-[3px] bg-[#588157] rounded-full" />
          )}
        </div>


        <div className="relative">
          <h5
            className={`text-[16px] 800px:text-[18px] font-semibold cursor-pointer transition ${
              active === 2 ? "text-[#3a5a40]" : "text-gray-600 hover:text-[#588157]"
            }`}
            onClick={() => setActive(2)}
          >
            Product Reviews
          </h5>

          {active === 2 && (
            <div className="absolute left-0 -bottom-[20px] w-full h-[3px] bg-[#3a5a40] rounded-full" />
          )}
        </div>


        <div className="relative">
          <h5
            className={`text-[16px] 800px:text-[18px] font-semibold cursor-pointer transition ${
              active === 3 ? "text-[#3a5a40]" : "text-gray-600 hover:text-[#588157]"
            }`}
            onClick={() => setActive(3)}
          >
            Seller Information
          </h5>

          {active === 3 && (
            <div className="absolute left-0 -bottom-[20px] w-full h-[3px] bg-[#3a5a40] rounded-full" />
          )}
        </div>

      </div>


      {/* Product Details */}
      {active === 1 && (
        <div className="p-6 800px:p-10">
          <p className="text-[15px] 800px:text-[17px] text-gray-700 leading-8 whitespace-pre-line">
            {data.description}
          </p>
        </div>
      )}


      {/* Reviews */}
      {active === 2 && (
        <div className="min-h-[300px] max-h-[500px] overflow-y-auto p-5">

          {data &&
            data.reviews?.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 p-4 mb-4 rounded-xl border bg-gray-50 hover:shadow-md transition"
              >

                <img
                  src={`${item.user.avatar?.url}`}
                  alt=""
                  className="w-[55px] h-[55px] rounded-full object-cover border"
                />

                <div className="flex-1">

                  <div className="flex flex-col 600px:flex-row 600px:items-center gap-2">

                    <h1 className="font-semibold text-gray-800">
                      {item.user.name}
                    </h1>

                    <Ratings rating={avgRating} />

                  </div>

                  <p className="text-gray-600 mt-2 leading-6">
                    {item.comment}
                  </p>

                </div>

              </div>
            ))}


          <div className="w-full flex justify-center items-center py-5">

            {data && data.reviews?.length === 0 && (
              <h5 className="text-gray-500 text-lg">
                No reviews available for this product!
              </h5>
            )}

          </div>

        </div>
      )}


      {/* Seller Information */}
      {active === 3 && (
        <div className="p-6 800px:p-10 flex flex-col 800px:flex-row justify-between gap-10">

          {/* Left Side */}
          <div className="800px:w-[55%]">

            <Link to={`/shop/preview/${data.shop._id}`}>

              <div className="flex items-center">

                <img
                  src={`${data?.shop?.avatar?.url}`}
                  className="w-[65px] h-[65px] rounded-full object-cover border-2 border-[#3a5a40]"
                  alt=""
                />

                <div className="pl-4">

                  <h3 className="text-[20px] font-bold text-gray-800">
                    {data.shop.name}
                  </h3>

                  <h5 className="text-gray-500 mt-1">
                    ({avgRating}/5) Ratings
                  </h5>

                </div>

              </div>

            </Link>


            <p className="pt-5 text-gray-700 leading-7">
              {data.shop.description}
            </p>

          </div>


          {/* Right Side */}
          <div className="800px:w-[40%]">

            <div className="bg-gray-50 border rounded-xl p-5">

              <h5 className="font-semibold text-gray-800">
                Joined on:
                <span className="font-normal ml-2 text-gray-600">
                  {data.shop?.createdAt?.slice(0, 10)}
                </span>
              </h5>


              <h5 className="font-semibold text-gray-800 mt-5">
                Total Products:
                <span className="font-normal ml-2 text-gray-600">
                  {products && products.length}
                </span>
              </h5>


              <h5 className="font-semibold text-gray-800 mt-5">
                Total Reviews:
                <span className="font-normal ml-2 text-gray-600">
                  {data?.reviews?.length}
                </span>
              </h5>


              <Link to="/">

                <div className="mt-6 h-[45px] rounded-lg bg-[#3a5a40] hover:bg-[#588157] transition flex items-center justify-center cursor-pointer">

                  <h4 className="text-white font-medium">
                    Visit Shop
                  </h4>

                </div>

              </Link>

            </div>

          </div>

        </div>
      )}

    </div>
  );
};

export default ProductDetails;