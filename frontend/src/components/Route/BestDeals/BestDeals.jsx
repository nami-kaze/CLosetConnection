import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "../../../styles/styles";
import ProductCard from "../ProductCard/ProductCard";

const BestDeals = () => {
  const [data, setData] = useState([]);
  const { allProducts } = useSelector((state) => state.products);

  useEffect(() => {
    if (allProducts && allProducts.length > 0) {
      const sortedData = allProducts.slice().sort((a, b) => {
        // If ratings value is not available for any product, treat it as zero
        const ratingA = a.ratings || 0;
        const ratingB = b.ratings || 0;
        return ratingB - ratingA; // Sort by rating
      });
      const firstFive = sortedData.slice(0, 5);
      setData(firstFive);
    }
  }, [allProducts]);

  return (
    <div>
      <div className={`${styles.section}`}>
        <div className={`${styles.heading}`}>
          <h1>Best Deals</h1>
        </div>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
          {data.map((product, index) => (
            <ProductCard key={index} data={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestDeals;
