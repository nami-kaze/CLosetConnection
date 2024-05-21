import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Loader from "../components/Layout/Loader";
import Header from "../components/Layout/Header";
import styles from "../styles/styles";
import ProductCard from "../components/Route/ProductCard/ProductCard";

const BestSellingPage = () => {
  const [data, setData] = useState([]);
  const { allProducts, isLoading } = useSelector((state) => state.products);

  useEffect(() => {
    if (Array.isArray(allProducts)) {
      const sortedProducts = [...allProducts].sort((a, b) => {
        // Treat missing ratings as zero
        const ratingA = a.ratings || 0;
        const ratingB = b.ratings || 0;
        return ratingB - ratingA; // Sort by rating
      });
      setData(sortedProducts);
      window.scrollTo(0, 0);
    }
  }, [allProducts]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Header activeHeading={2} />
          <br />
          <br />
          <div className={`${styles.section}`}>
            <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
              {data &&
                data.map((product, index) => (
                  <ProductCard key={index} data={product} />
                ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BestSellingPage;
