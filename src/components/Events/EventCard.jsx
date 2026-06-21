// import React from "react";
// import styles from "../../styles/styles";
// import CountDown from "./CountDown";

// const EventCard = ({ active }) => {
//   return (
//     <div
//       className={`w-[90%] mx-auto bg-white rounded-xl shadow-md overflow-hidden ${
//         active ? "" : "mb-12"
//       }`}
//     >
//       <div className="flex flex-col lg:flex-row items-center p-6 gap-8">
        
//         {/* Product Image */}
//         <div className="w-full lg:w-[45%] flex justify-center">
//           <img
//             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmGYoGFU4LwrKWZwygxEGHHqLQw8ObhRTPVA&s"
//             alt="Earbuds"
//             className="w-[280px] h-[280px] object-contain hover:scale-105 transition duration-300"
//           />
//         </div>

//         {/* Product Details */}
//         <div className="w-full lg:w-[55%]">
//           <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
//             Limited Deal
//           </span>

//           <h2 className="text-[32px] font-bold text-[#1f2937] mt-3">
//             L-200 Earbuds
//           </h2>

//           <p className="text-gray-600 text-[16px] leading-7 mt-3">
//             Premium Bluetooth earbuds with HD stereo sound, deep bass,
//             noise cancellation, touch controls, and long battery life.
//             Perfect for workouts, daily use, and hands-free calls.
//           </p>

//           {/* Price */}
//           <div className="flex items-center justify-between mt-5">
//             <div className="flex items-center gap-3">
//               <span className="text-red-500 text-[22px] line-through">
//                 $105
//               </span>
//               <span className="text-[30px] font-bold text-[#111827]">
//                 $90
//               </span>
//             </div>

//             <span className="text-green-600 font-medium text-[18px]">
//               120 sold
//             </span>
//           </div>

//           {/* Countdown */}
//           <div className="mt-5">
//             <CountDown />
//           </div>

//           {/* Button */}
//           <button className="mt-6 bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition">
//             Shop Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EventCard;

import React from "react";
import styles from "../../styles/styles";
import CountDown from "./CountDown";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addTocart } from "../../redux/actions/cart";
import { toast } from "react-toastify";

const EventCard = ({ active, data }) => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addToCartHandler = (data) => {
    const isItemExists = cart && cart.find((i) => i._id === data._id);
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
  }
  
  return (
    <div
      className={`w-full block bg-white rounded-lg ${
        active ? "unset" : "mb-12"
      } lg:flex p-2`}
    >
      <div className="w-full lg:-w[50%] m-auto">
        <img src={`${data.image[0]?.url}`} alt="" />
      </div>
      <div className="w-full lg:[w-50%] flex flex-col justify-center">
        <h2 className={`${styles.productTitle}`}>{data.name}</h2>
        <p>{data.description}</p>
        <div className="flex py-2 justify-between">
          <div className="flex">
            <h5 className="font-[500] text-[18px] text-[#d55b45] pr-3 line-through">
              {data.originalPrice}$
            </h5>
            <h5 className="font-bold text-[20px] text-[#333] font-Roboto">
              {data.discountPrice}$
            </h5>
          </div>
          <span className="pr-3 font-[400] text-[17px] text-[#44a55e]">
            {data.sold_out} sold
          </span>
        </div>
        <CountDown data={data} />
        <br />
        <div className="flex items-center">
          <Link to={`/product/${data._id}?isEvent=true`}>
            <div className={`${styles.button} text-[#fff]`}>See Details</div>
          </Link>
          <div className={`${styles.button} text-[#fff] ml-5`} onClick={() => addToCartHandler(data)}>Add to cart</div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;