
import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { IoBagHandleOutline } from "react-icons/io5";
import { HiOutlineMinus, HiPlus } from "react-icons/hi";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addTocart, removeFromCart } from "../../redux/actions/cart";
import { toast } from "react-toastify";

const Cart = ({ setOpenCart }) => {
  const state = useSelector((state) => state);
  const cart = state?.cart?.cart || [];
  const dispatch = useDispatch();

  const removeFromCartHandler = (data) => {
    dispatch(removeFromCart(data));
  };

  const quantityChangeHandler = (data) => {
    dispatch(addTocart(data));
  };

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.qty * item.discountPrice,
    0
  );

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex justify-end">

      {/* DRAWER */}
      <div className="w-[85%] sm:w-[70%] md:w-[50%] lg:w-[25%] h-full bg-white flex flex-col">

        {/* HEADER (NOT SCROLLABLE) */}
        <div className="relative flex items-center p-4 border-b">

          <IoBagHandleOutline size={22} />
          <h5 className="ml-2 text-[18px] font-[500]">
            {cart.length} Items
          </h5>

          {/* ✅ FIXED CROSS ICON (THIS WILL NOW ALWAYS SHOW) */}
          <div className="absolute right-3 top-3 z-[999] bg-white p-2 rounded-full shadow-md">
            <RxCross1
              size={20}
              className="cursor-pointer"
              onClick={() => setOpenCart(false)}
            />
          </div>
        </div>

        {/* BODY (SCROLL ONLY HERE) */}
        <div className="flex-1 overflow-y-auto">
          {cart.length === 0 ? (
            <div className="h-full flex items-center justify-center">
              Cart is empty!
            </div>
          ) : (
            cart.map((i, index) => (
              <CartSingle
                key={index}
                data={i}
                quantityChangeHandler={quantityChangeHandler}
                removeFromCartHandler={removeFromCartHandler}
              />
            ))
          )}
        </div>

        {/* FOOTER */}
        <div className="p-4 border-t">
          <Link to="/checkout">
            <div className="h-[45px] flex items-center justify-center bg-[#e44343] rounded-[5px]">
              <h1 className="text-white font-[600]">
                Checkout (USD ${totalPrice})
              </h1>
            </div>
          </Link>
        </div>

      </div>
    </div>
  );
};

const CartSingle = ({ data, quantityChangeHandler, removeFromCartHandler }) => {
  console.log("data",data)
  const [value, setValue] = useState(data.qty);
  const totalPrice = data.discountPrice * value;
  const increment = () => {
    if (data.stock < value) {
      toast.error("Product stock limited!");
      return;
    }
    const newQty = value + 1;
    setValue(newQty);
    quantityChangeHandler({ ...data, qty: newQty });
  };

  const decrement = () => {
    const newQty = value === 1 ? 1 : value - 1;
    setValue(newQty);
    quantityChangeHandler({ ...data, qty: newQty });
  };
  const image=data.images || data.image;
  return (
    <div className="border-b p-4 flex items-center gap-2">

      <div className="flex flex-col items-center gap-1">
        <div
          className="bg-red-500 text-white w-[25px] h-[25px] rounded-full flex items-center justify-center cursor-pointer"
          onClick={increment}
        >
          <HiPlus size={16} />
        </div>

        <span>{value}</span>

        <div
          className="bg-gray-200 w-[25px] h-[25px] rounded-full flex items-center justify-center cursor-pointer"
          onClick={decrement}
        >
          <HiOutlineMinus size={16} />
        </div>
      </div>

      <img
        src={image[0]?.url}
        alt=""
        className="w-[70px] h-[70px] object-cover rounded"
      />

      <div className="flex-1">
        <h1 className="text-sm">{data.name}</h1>
        <p className="text-xs text-gray-500">
          ${data.discountPrice} × {value}
        </p>
        <p className="text-red-500 font-semibold">
          USD ${totalPrice}
        </p>
      </div>

      <RxCross1
        className="cursor-pointer"
        onClick={() => removeFromCartHandler(data)}
      />
    </div>
  );
};

export default Cart;