import React from 'react'
import styles from '../../../styles/styles'
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ProductCard from '../ProductCard/ProductCard'
import { getAllProducts } from "../../../redux/actions/product";
export default function FeaturedProduct() {
   const state = useSelector((state) => state.products);
  console.log("FULL PRODUCTS STATE:", state);
  const dispatch = useDispatch();

  const { allProducts = [] } = useSelector((state) => state.products);
  const products = allProducts;
   console.log("Products",products)
  const [data, setData] = useState([]);

  // load products
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  // safe sorting when products arrive
  useEffect(() => {
    if (!products || products.length === 0) {
      setData([]);
      return;
    }

    const sorted = [...products]
      .sort((a, b) => (b.sold_out || 0) - (a.sold_out || 0))
      .slice(0, 5);

    setData(sorted);
  }, [products]);
  console.log("Data",data)
  return (
      <div>
      <div className={`${styles.section}`}>
        <div className={`${styles.heading}`}>
          <h1>Best Deals</h1>
        </div>

        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
          {data.length > 0 &&
            data.map((i) => (
              <ProductCard key={i._id} data={i} />
            ))}
        </div>
      </div>
    </div>
  )
}
