

import React from "react";
import { RxCross1 } from "react-icons/rx";
import { BsCartPlus } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../../redux/actions/wishlist";
import { addTocart } from "../../redux/actions/cart";

const Wishlist = ({ setOpenWishlist }) => {
  const { wishlist } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  const removeFromWishlistHandler = (data) => {
    dispatch(removeFromWishlist(data));
  };

  const addToCartHandler = (data) => {
    dispatch(addTocart({ ...data, qty: 1 }));
    dispatch(removeFromWishlist(data))
    setOpenWishlist(false);
  };
 
  console.log("wishlist",wishlist)
  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex justify-end">

      {/* DRAWER */}
      <div className="relative h-full w-[85%] sm:w-[70%] md:w-[50%] lg:w-[25%] bg-white flex flex-col shadow-xl">

        {/* HEADER (FIXED STRUCTURE LIKE CART) */}
        <div className="relative flex items-center p-4 border-b">

          <AiOutlineHeart size={22} />
          <h5 className="ml-2 text-[18px] font-[500]">
            {wishlist.length} Items
          </h5>

          {/* ✅ CROSS ICON (NOW ALWAYS VISIBLE) */}
          <div className="absolute top-3 right-3 z-[999] bg-white shadow-md rounded-full p-2">
            <RxCross1
              size={20}
              className="cursor-pointer"
              onClick={() => setOpenWishlist(false)}
            />
          </div>

        </div>

        {/* BODY (ONLY SCROLL HERE) */}
        <div className="flex-1 overflow-y-auto">

          {wishlist.length === 0 ? (
            <div className="h-full flex items-center justify-center">
              Wishlist is empty!
            </div>
          ) : (
            wishlist.map((i, index) => (
              <div key={index} className="border-b p-4 flex items-center gap-3">

                <RxCross1
                  className="cursor-pointer text-gray-600"
                  onClick={() => removeFromWishlistHandler(i)}
                />

                <img
                  src={i?.image[0]?.url}
                  alt=""
                  className="w-[70px] h-[70px] object-cover rounded"
                />

                <div className="flex-1">
                  <h1 className="text-sm font-medium">{i.name}</h1>
                  <p className="text-red-500 font-semibold">
                    USD ${i.discount_price}
                  </p>
                </div>

                <BsCartPlus
                  size={20}
                  className="cursor-pointer"
                  onClick={() => addToCartHandler(i)}
                />
              </div>
            ))
          )}

        </div>

      </div>
    </div>
  );
};

export default Wishlist;