

import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Header from "../components/Layout/header";
import Footer from "../components/Layout/Footer";
import ProductDetails from "../components/Products/productdetail";
import SuggestedProduct from "../components/Products/SuggestedProduct";

import { getAllProducts } from "../redux/actions/product";
import { getAllEventsShop } from "../redux/actions/event";

const ProductDetailsPage = () => {
  const dispatch = useDispatch();

  const { products = [], allProducts = [] } = useSelector(
    (state) => state.products
  );

  const { events = [], allEvents = [] } = useSelector(
  (state) => state.events || {}
);
  const { seller } = useSelector((state) => state.seller);

  const { id } = useParams();
  const [data, setData] = useState(null);

  const [searchParams] = useSearchParams();
  const eventData = searchParams.get("isEvent");

  

  // Load all products when page opens
  useEffect(() => {
    dispatch(getAllProducts());
    if (seller?._id) {
    dispatch(getAllEventsShop(seller._id));
  }
  }, [dispatch, seller?._id]);

  // Find product/event by id
  useEffect(() => {
    // console.log("URL ID:", id);
    // console.log("products:", products);
    // console.log("allProducts:", allProducts);
    // console.log("allEvents:", allEvents);

    let foundData = null;
   
     if (eventData) {
      // console.log("eventData:", eventData);
      // console.log("events:", events);
      // console.log("allEvents:", allEvents);

      foundData =
        events.find((item) => item._id === id) ||
        allEvents.find((item) => item._id === id);
     } else {
        foundData =
          products.find((item) => item._id === id) ||
          allProducts.find((item) => item._id === id);
     }



    console.log("FOUND DATA:", foundData);

    if (foundData) {
      setData(foundData);
    }
  }, [id, products, allProducts,events, allEvents, eventData]);

  return (
    <div>
      <Header />

      <ProductDetails data={data} />

      { data && (
        <SuggestedProduct data={data} />
      )}

      <Footer />
    </div>
  );
};

export default ProductDetailsPage;