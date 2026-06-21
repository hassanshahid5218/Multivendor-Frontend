

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { server } from "../../server";
import styles from "../../styles/styles";
import Loader from "../Layout/Loader";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsShop } from "../../redux/actions/product";

const ShopInfo = ({ isOwner }) => {
  const [data, setData] = useState({});
  const { products } = useSelector((state) => state.products);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllProductsShop(id));
    setIsLoading(true);
    axios
      .get(`${server}/shop/get-shop-info/${id}`)
      .then((res) => {
        setData(res.data.shop);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  const logoutHandler = async () => {
    axios
      .get(`${server}/shop/logout`, { withCredentials: true })
      .then(() => {
        navigate("/");
      });
  };

  const totalReviewsLength =
    products &&
    products.reduce((acc, product) => acc + product.reviews.length, 0);

  const totalRatings =
    products &&
    products.reduce(
      (acc, product) =>
        acc +
        product.reviews.reduce((sum, review) => sum + review.rating, 0),
      0
    );

  const averageRating = totalRatings / totalReviewsLength || 0;

  return (
  <>
    {isLoading ? (
      <Loader />
    ) : (
      <div className="w-full px-4 py-6 bg-white rounded-xl shadow-sm">

        {/* PROFILE HEADER */}
        <div className="flex flex-col items-center text-center border-b pb-5">
          <div className="p-1 rounded-full bg-gradient-to-tr from-gray-100 to-gray-200 shadow-inner">
            <img
              src={`${data.avatar?.url}`}
              alt=""
              className="w-[120px] h-[120px] md:w-[140px] md:h-[140px] object-cover rounded-full border-4 border-white shadow-md"
            />
          </div>

          <h3 className="text-[18px] md:text-[20px] font-semibold mt-3 text-gray-800">
            {data.name}
          </h3>

          <p className="text-sm text-gray-500 mt-2 px-2 leading-relaxed">
            {data.description}
          </p>
        </div>

        {/* INFO BLOCKS */}
        <div className="mt-5 space-y-4 text-sm">

          <div className="p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition">
            <h5 className="font-semibold text-gray-700">Address</h5>
            <h4 className="text-gray-500">{data.address}</h4>
          </div>

          <div className="p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition">
            <h5 className="font-semibold text-gray-700">Phone Number</h5>
            <h4 className="text-gray-500">{data.phoneNumber}</h4>
          </div>

          <div className="p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition">
            <h5 className="font-semibold text-gray-700">Total Products</h5>
            <h4 className="text-gray-500">
              {products && products.length}
            </h4>
          </div>

          <div className="p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition">
            <h5 className="font-semibold text-gray-700">Shop Ratings</h5>
            <h4 className="text-gray-500">
              {averageRating.toFixed(1)}/5
            </h4>
          </div>

          <div className="p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition">
            <h5 className="font-semibold text-gray-700">Joined On</h5>
            <h4 className="text-gray-500">
              {data?.createdAt?.slice(0, 10)}
            </h4>
          </div>
        </div>

        {/* ACTION BUTTONS */}
        {isOwner && (
          <div className="mt-6 space-y-3">

            <Link to="/settings">
              <div className={`${styles.button} bg-[#727069] hover:bg-[#8e8a7b]
              !w-full !h-[44px] !rounded-lg shadow-sm`}>
                <span className="text-white font-medium">Edit Shop</span>
              </div>
            </Link>

            <div
              className={`${styles.button} !w-full !h-[44px] !rounded-lg shadow-sm bg-red-500 hover:bg-red-600`}
              onClick={logoutHandler}
            >
              <span className="text-white font-medium">Log Out</span>
            </div>

          </div>
        )}
      </div>
    )}
  </>
);
};

export default ShopInfo;