import React, { useEffect, useState, useContext } from "react";
import CarouselThumbs from "./CarouselThumbs";
import "./Product.css";
import { useParams, Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as FiIcons from "react-icons/fi";
import CartContext from "../../store/cart-context";
import Loader from "../../components/Loader/Loader.jsx";

const Product = (props) => {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [sizeIsValid, setSizeIsValid] = useState(false);
  const [descArr, setDescArr] = useState([]);
  const [loading, setLoading] = useState(false);
  const [productDetails, setProductDetails] = useState([
    {
      _id: "",
      name: "",
      description: [],
      price: "",
      productB: "",
      productM: "",
      productF: "",
      category: "",
    },
  ]);

  let params = useParams();
  const cartCtx = useContext(CartContext);

  useEffect(() => {
    window.scrollTo(0, 0);
    try {
      setLoading(true);
      fetch(`https://eviloni-backend.onrender.com/products/${params.id}`)
        .then((response) => {
          return response.json();
        })
        .then((responseData) => {
          setProductDetails(responseData);
          setDescArr(
            responseData[0].description[0]
              .replace("[", "")
              .replace("]", "")
              .replaceAll('"', "")
              .split(",")
          );
          document.title = `Evil Oni - ${responseData[0].name}`;
        });
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
    // eslint-disable-next-line
  }, []);

  const getSize = (e) => {
    if (e.target.id !== "") {
      setSelectedSize(e.target.id);
      setSizeIsValid(true);
    } else {
      return;
    }
  };
  const submitToCartHandler = () => {
    if (selectedSize === "") {
      setSizeIsValid(false);
      return;
    }
    cartCtx.addItem({
      id: productDetails[0]._id + selectedSize,
      img: productDetails[0].productF,
      name: productDetails[0].name,
      price: productDetails[0].price,
      quantity: selectedQuantity,
      size: selectedSize,
    });
  };

  return (
    <React.Fragment>
      {loading ? (
        <Loader />
      ) : (
        <div className="product-layout">
          {productDetails[0].name === "" ? (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
              }}
            >
              <Loader />
            </div>
          ) : (
            <div className="container flexing">
              <div className="carousel">
                <CarouselThumbs
                  product1b={productDetails[0].productB}
                  product1f={productDetails[0].productF}
                  product1m={productDetails[0].productM}
                />
              </div>
              <div className="product-specs">
                <h1 className="product-specs-heading">
                  {productDetails[0].name}
                  <hr className="hr" />
                </h1>
                <div className="product-specs-desc">
                  Product Details
                  <ul>
                    {descArr.map((bulletPoint) => (
                      <li key={bulletPoint}>{bulletPoint}</li>
                    ))}
                  </ul>
                  <div className="price-size">
                    <p className="product-specs-desc-cost">
                      PRICE: ₹ {productDetails[0].price}
                    </p>
                    <label className="product-specs-desc-quantity">
                      Quantity:
                      {selectedQuantity}
                      <FiIcons.FiPlusCircle
                        id="add"
                        onClick={() => {
                          if (selectedQuantity < 9) {
                            setSelectedQuantity(selectedQuantity + 1);
                          }
                        }}
                      />
                      <FiIcons.FiMinusCircle
                        id="remove"
                        onClick={() => {
                          if (selectedQuantity > 1) {
                            setSelectedQuantity(selectedQuantity - 1);
                          }
                        }}
                      />
                    </label>
                  </div>
                  <div className="sizes">
                    <div className="product-specs-desc-size">select Size</div>
                    <div className="sizes-circles-container">
                      <div className="size-circles">
                        <label>
                          <input
                            type="radio"
                            name="size"
                            onClick={getSize}
                            id="S"
                            style={{ cursor: "pointer" }}
                          />
                          <span
                            style={{
                              right: "2.2rem",
                              top: "-0.8rem",
                              cursor: "pointer",
                            }}
                          >
                            S
                          </span>
                        </label>
                      </div>
                      <div className="size-circles">
                        <label>
                          <input
                            type="radio"
                            name="size"
                            onClick={getSize}
                            id="M"
                            style={{ cursor: "pointer" }}
                          />
                          <span
                            style={{
                              right: "2.24rem",
                              top: "-0.8rem",
                              cursor: "pointer",
                            }}
                          >
                            M
                          </span>
                        </label>
                      </div>
                      <div className="size-circles">
                        <label>
                          <input
                            type="radio"
                            name="size"
                            onClick={getSize}
                            id="L"
                            style={{ cursor: "pointer" }}
                          />
                          <span
                            style={{
                              right: "2.2rem",
                              top: "-0.8rem",
                              cursor: "pointer",
                            }}
                          >
                            L
                          </span>
                        </label>
                      </div>
                      <div className="size-circles">
                        <label>
                          <input
                            type="radio"
                            name="size"
                            onClick={getSize}
                            id="XL"
                            style={{ cursor: "pointer" }}
                          />
                          <span
                            style={{
                              right: "2.3rem",
                              top: "-0.8rem",
                              cursor: "pointer",
                            }}
                          >
                            XL
                          </span>
                        </label>
                      </div>
                      <div className="size-circles">
                        <label>
                          <input
                            type="radio"
                            name="size"
                            onClick={getSize}
                            id="XXL"
                            style={{ cursor: "pointer" }}
                          />
                          <span
                            style={{
                              right: "2.5rem",
                              top: "-0.8rem",
                              cursor: "pointer",
                            }}
                          >
                            XXL
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="add-to-cart-refer">
                    <Link
                      to="/sizechart"
                      className="link-to-size-chart"
                      style={{ textDecoration: "none" }}
                    >
                      <p style={{ marginTop: "2rem" }}>
                        Refer to our size chart
                      </p>
                    </Link>
                    <div className="action submit">
                      <button
                        className="add-to-cart-text"
                        onClick={submitToCartHandler}
                        disabled={!sizeIsValid}
                      >
                        <p>
                          <FaIcons.FaCartPlus />
                        </p>
                        <p>ADD TO CART</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </React.Fragment>
  );
};

export default Product;
