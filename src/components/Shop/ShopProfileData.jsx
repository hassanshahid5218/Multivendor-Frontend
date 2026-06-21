

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getAllProductsShop } from "../../redux/actions/product";
import styles from "../../styles/styles";
import ProductCard from "../Route/ProductCard/ProductCard";
import Ratings from "../Products/Ratings";
import { getAllEventsShop } from "../../redux/actions/event.js";

const ShopProfileData = ({ isOwner }) => {
  const { products } = useSelector((state) => state.products);
  const { events } = useSelector((state) => state.events);
  const { id } = useParams();
  const dispatch = useDispatch();

  const [active, setActive] = useState(1);

  useEffect(() => {
    dispatch(getAllProductsShop(id));
    dispatch(getAllEventsShop(id));
  }, [dispatch, id]);

  const allReviews =
    products && products.map((product) => product.reviews).flat();

  return (
  <div className="w-full">

    {/* HEADER */}
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 pb-4 border-b">

      {/* TABS */}
      <div className="flex flex-wrap gap-2">

        <button
          onClick={() => setActive(1)}
          className={`px-4 py-2 rounded-full text-sm md:text-[15px] font-medium transition ${
            active === 1
              ? "bg-[#588157] text-white shadow"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Shop Products
        </button>

        <button
          onClick={() => setActive(2)}
          className={`px-4 py-2 rounded-full text-sm md:text-[15px] font-medium transition ${
            active === 2
              ? "bg-[#588157] text-white shadow"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Running Events
        </button>

        <button
          onClick={() => setActive(3)}
          className={`px-4 py-2 rounded-full text-sm md:text-[15px] font-medium transition ${
            active === 3
              ? "bg-[#588157] text-white shadow"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Shop Reviews
        </button>

      </div>

      {/* DASHBOARD BUTTON */}
      {isOwner && (
        <Link to="/dashboard">
          <div className={`${styles.button} !rounded-lg h-[42px] px-5`}>
            <span className="text-white">Go Dashboard</span>
          </div>
        </Link>
      )}
    </div>

    <br />

    {/* PRODUCTS */}
    {active === 1 && (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products &&
          products.map((i, index) => (
            <ProductCard data={i} key={index} isShop={true} />
          ))}
      </div>
    )}

    {/* EVENTS */}
    {active === 2 && (
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {events &&
            events.map((i, index) => (
              <ProductCard
                data={i}
                key={index}
                isShop={true}
                isEvent={true}
              />
            ))}
        </div>

        {events && events.length === 0 && (
          <div className="text-center py-10 text-gray-500">
            No Events available for this shop
          </div>
        )}
      </div>
    )}

    {/* REVIEWS */}
    {active === 3 && (
      <div className="space-y-5 mt-4">

        {allReviews &&
          allReviews.map((item, index) => (
            <div
              key={index}
              className="flex gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition"
            >

              <img
                src={`${item.user.avatar?.url}`}
                className="w-[48px] h-[48px] rounded-full object-cover"
                alt=""
              />

              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h1 className="font-semibold text-gray-800">
                    {item.user.name}
                  </h1>
                  <Ratings rating={item.rating} />
                </div>

                <p className="text-gray-600 text-sm mt-1">
                  {item?.comment}
                </p>

                <p className="text-gray-400 text-xs mt-1">
                  2 days ago
                </p>
              </div>

            </div>
          ))}

        {allReviews && allReviews.length === 0 && (
          <div className="text-center py-10 text-gray-500">
            No Reviews available for this shop
          </div>
        )}
      </div>
    )}
  </div>
);
};

export default ShopProfileData;