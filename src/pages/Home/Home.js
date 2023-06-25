import React, { useEffect, useState } from "react";
import "./Home.css";
import ControlledCarousel from "../../components/Carousel/ControlledCarousel.jsx";
import Multicarousel from "../../components/Carousel/Multicarousel.jsx";
import ProductCard from "./ProductCard";
import Loader from "../../components/Loader/Loader";

const Home = () => {
  const [ProductArray, setProductArray] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const prodarr = [];

  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    document.title = "Evil Oni - Home";
    try {
      setLoading(true);
      fetch("https://eviloni-backend.onrender.com/products")
        .then((response) => {
          return response.json();
        })
        .then((responseData) => {
          for (const key in responseData) {
            prodarr.push({
              id: responseData[key]._id,
              productName: responseData[key].name,
              productB: responseData[key].productB,
              productF: responseData[key].productF,
              productM: responseData[key].productM,
              productPrice: responseData[key].price,
              productDesc: responseData[key].description,
              category: responseData[key].category,
              rating: responseData[key].rating,
            });
          }
          setProductArray(prodarr);
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
    window.addEventListener("resize", handleResize);
    // eslint-disable-next-line
  }, []);
  return (
    <div className="home">
      <div>
        <ControlledCarousel deviceType={isMobile ? "mobile" : "desktop"} />
      </div>
      <div className="new-arrivals">
        <h2 className="headings">New Arrivals</h2>
        {loading && <Loader />}

        <Multicarousel
          deviceType={isMobile ? "mobile" : "desktop"}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "stretch",
          }}
        >
          {/* <div className="layout">
            {ProductArray.slice(1, 5).map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.productName}
                price={product.productPrice}
                img={product.productF}
                category={product.category}
              />
            ))}
          </div>
          <div className="layout">
            {ProductArray.slice(5, 9).map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.productName}
                price={product.productPrice}
                img={product.productF}
                category={product.category}
              />
            ))} */}

          {ProductArray.slice(1, 9).map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.productName}
              price={product.productPrice}
              img={product.productF}
              category={product.category}
              rating={product.rating}
            />
          ))}
        </Multicarousel>
        <h2 className="headings">Top Selling</h2>
        {loading && <Loader />}
        <Multicarousel
          deviceType={isMobile ? "mobile" : "desktop"}
          style={{ marginBottom: "1rem" }}
        >
          {/* <div className="layout">
            {ProductArray.slice(9, 13).map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.productName}
                price={product.productPrice}
                img={product.productF}
                category={product.category}
              />
            ))}
          </div>
          <div className="layout">
            {ProductArray.slice(13).map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.productName}
                price={product.productPrice}
                img={product.productF}
                category={product.category}
              />
            ))}
          </div> */}
          {ProductArray.slice(9, 17).map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.productName}
              price={product.productPrice}
              img={product.productF}
              category={product.category}
              rating={product.rating}
            />
          ))}
        </Multicarousel>
      </div>
    </div>
  );
};

export default Home;
