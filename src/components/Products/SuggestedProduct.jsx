import React, { useEffect, useState } from "react";

import styles from "../../styles/styles";
import ProductCard from "../Route/ProductCard/ProductCard";
import { useSelector } from "react-redux";
const normalizeCategory = (category) =>
  category
    ?.toLowerCase()
    .replace(/&/g, "and")
    .replace(/\s+/g, " ")
    .replace(/laptops/g, "laptop")
    .replace(/tablets/g, "tablet")
    .trim();

const SuggestedProduct = ({ data }) => {
  const [suggestedProducts, setSuggestedProducts] = useState([]);
   const { products = [], allProducts = [] } = useSelector(
       (state) => state.products
     );
  useEffect(() => {
    if (!data) {
      setSuggestedProducts([]);
      return;
    }

    const currentCategory = normalizeCategory(data.category);
    const relatedProducts =  allProducts.filter(
      (i) => normalizeCategory(i.category) === currentCategory && i !== data
    )

    

    setSuggestedProducts(relatedProducts);
  }, [data]);

  return (
    <div>
      {data ? (
        <div className={`p-4 ${styles.section}`}>
          <h2
            className={`${styles.heading} text-[25px] font-[500] border-b mb-5`}
          >
            Related Product
          </h2>
          <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
            {suggestedProducts.map((i, index) => (
              <ProductCard data={i} key={`${i.id}-${i.name}-${index}`} />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default SuggestedProduct;
