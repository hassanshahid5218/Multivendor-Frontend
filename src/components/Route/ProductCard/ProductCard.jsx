

import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import Ratings from "../../Products/Ratings.jsx";
import {
  AiFillHeart,
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ProductDetailsCard from "../ProductDetailsCard/ProductDetailsCard.jsx";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../../redux/actions/wishlist";
import { addTocart } from "../../../redux/actions/cart";
const ProductCard = ({ data, isEvent }) => {
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);
  const { wishlist } = useSelector((state) => state.wishlist);
  const { cart } = useSelector((state) => state.cart); 
  const dispatch = useDispatch();
  useEffect(() => {
    if (wishlist && wishlist.find((i) => i._id === data._id)) {
      setClick(true);
    } else {
      setClick(false);
    }
  }, [wishlist]);
  if (!data) return null;

  const productName = data?.name?.replace(/\s+/g, "-");

  const imageUrl = data?.image?.[0]?.url;

  const shopId = data?.shop?._id;

  

  const removeFromWishlistHandler = (data) => {
    setClick(!click);
    dispatch(removeFromWishlist(data));
  };

  const addToWishlistHandler = (data) => {
    setClick(!click);
    dispatch(addToWishlist(data));
  };
  
 

  const addToCartHandler = (id) => {
    const isItemExists = cart && cart.find((i) => i._id === id);
    if (isItemExists) {
      toast.error("Item already in cart!");
    } else {
      if (data.stock < 1) {
        toast.error("Product stock limited!");
      } else {
        const cartData = { ...data, qty: 1 };
        dispatch(addTocart(cartData));
        toast.success("Item added to cart successfully!");
      }
    }
  };
  
  const avgRating =
  data?.reviews?.length > 0
    ? data.reviews.reduce((acc, item) => acc + item.rating, 0) / data.reviews.length
    : 0;

  return (
    <div className="w-full h-[370px] bg-white rounded-lg shadow-sm p-3 relative cursor-pointer">

      {/* IMAGE */}
      <Link
        to={
          isEvent
            ? `/product/${data._id}?isEvent=true`
            : `/product/${data._id}`
        }
      >
        <img
          src={imageUrl}
          alt=""
          className="w-full h-[170px] object-contain"
        />
      </Link>

      {/* SHOP NAME */}
      <Link to={`/shop/preview/${shopId}`}>
        <h5 className={`${styles.shop_name}`}>
          {data?.shop?.name}
        </h5>
      </Link>

      {/* PRODUCT NAME */}
      <Link
        to={
          isEvent
            ? `/product/${data._id}?isEvent=true`
            : `/product/${data._id}`
        }
      >
        <h4 className="pb-3 font-[500]">
          {data?.name?.length > 40
            ? data.name.slice(0, 40) + "..."
            : data?.name}
        </h4>

        {/* RATING */}
        <div className="flex">
          <Ratings rating={avgRating} />
        </div>

        {/* PRICE */}
        <div className="py-2 flex items-center justify-between">
          <div className="flex">
            <h5 className={styles.productDiscountPrice}>
              {data?.discountPrice}$
            </h5>

            <h4 className={styles.price}>
              {data?.originalPrice ? data.originalPrice + " $" : null}
            </h4>
          </div>

          <span className="font-[400] text-[17px] text-[#68d284]">
            {data?.sold_out || 0} sold
          </span>
        </div>
      </Link>

      {/* SIDE ICONS */}
      <div>
        {click ? (
          <AiFillHeart
            size={22}
            className="cursor-pointer absolute right-2 top-5"
            onClick={() => removeFromWishlistHandler(data)}
            color="red"
          />
        ) : (
          <AiOutlineHeart
            size={22}
            className="cursor-pointer absolute right-2 top-5"
            onClick={() => addToWishlistHandler(data)}
          />
        )}

        <AiOutlineEye
          size={22}
          className="cursor-pointer absolute right-2 top-14"
          onClick={() => setOpen(!open)}
        />

        <AiOutlineShoppingCart
          size={25}
          className="cursor-pointer absolute right-2 top-24"
          onClick={() => addToCartHandler(data._id)}
        />

        {open && (
          <ProductDetailsCard
            open={open}
            setOpen={setOpen}
            data={data}
          />
        )}
      </div>
    </div>
  );
};

export default ProductCard;