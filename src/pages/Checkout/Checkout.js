import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Checkout.css";
import Checkoutitem from "./Checkoutitem";
import dottedLines from "./assets/dotted-lines.gif";
import inactiveDottedLines from "./assets/inactivedots.png";
import activeDottedLines from "./assets/active-dotss.png";
import Button from "./Button";
import Detailsform from "./Detailsform";
import Confirmorder from "./Confirmorder";
import Modal from "./Modal";
import * as BsIcons from "react-icons/bs";
import CartContext from "../../store/cart-context";

const Checkout = () => {
  const [atCart, setAtCart] = useState("Cart");
  const [label, setLabel] = useState("Details");
  const [showModal, setShowModal] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [finalOrderAmount, setFinalOrderAmount] = useState("");
  const [orderId, setOrderId] = useState("");
  const cartCtx = useContext(CartContext);
  const [isCartEmpty, setIsCartEmpty] = useState(false);

  useEffect(() => {
    document.title = `Evil Oni - ${atCart}`;
    if (cartCtx.items.length !== 0) {
      setIsCartEmpty(true);
    } else {
      setIsCartEmpty(false);
    }
  }, [atCart, isCartEmpty, cartCtx.items.length]);

  const cartItems = (
    <ul>
      {cartCtx.items.map((cartItem) => {
        return (
          <Checkoutitem
            key={cartItem.id}
            id={cartItem.id}
            name={cartItem.name}
            amount={cartItem.amount}
            price={cartItem.price}
            size={cartItem.size}
            img={cartItem.img}
            quantity={cartItem.quantity}
          />
        );
      })}
    </ul>
  );

  const proceedToDetailsHandler = () => {
    setAtCart("Details");
    setLabel("Order");
    // console.log(atCart);
  };
  const backToCartHandler = () => {
    setAtCart("Cart");
    setLabel("Details");
    // console.log("label: modal");
  };

  const proceedToPlaceOrderHandler = () => {
    setAtCart("ConfirmOrder");
    setLabel("Place Order");
    // console.log("proceed to place order handler " + label);
    // console.log(atCart);
    // console.log("Place Order:" + atCart);
  };

  const BackToDetailsHandler = () => {
    setAtCart("Details");
    setLabel("Order");
    // console.log("Place Order:" + atCart);
  };

  const getDetailsHandler = (userData) => {
    setUserInfo(userData);
    // console.log("getDetailsHandler in checkout.js: " + userInfo);
    setOrderId(`EO${Math.floor(Math.random() * 100000)}`);
  };

  const showConfirmedOrder = async () => {
    setShowModal(true);
    // console.log("showModal" + showModal);
    const orderDetails = {
      customer: userInfo,
      orderedItems: cartCtx.items,
      orderAmount: finalOrderAmount,
      orderId: orderId,
    };
    console.log(JSON.stringify(orderDetails));
    try {
      const response = await fetch(
        "https://eviloni-backend.onrender.com/order",
        {
          method: "POST",
          body: JSON.stringify(orderDetails),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  const hideConfirmedOrder = () => {
    setShowModal(false);
    localStorage.removeItem("items");
    localStorage.removeItem("totalAmount");
    cartCtx.clearCart();
    // console.log("hideModal" + showModal);
  };

  const getValidityToken = (validity) => {
    setIsValid(validity);
  };

  const getFinalOrderAmount = (finalAmount) => {
    setFinalOrderAmount(finalAmount);
  };

  return (
    <React.Fragment>
      <div className="checkout-layout">
        {showModal && (
          <Modal hideModal={hideConfirmedOrder} orderId={orderId} />
        )}
        {isCartEmpty ? (
          <div className="container ">
            <div className="container ctr">
              <div className="checkout-heading">
                CHECKOUT
                <div className="process-steps">
                  <p className={atCart === "Cart" ? "cart" : ""}>
                    Cart&nbsp; &nbsp;
                    {atCart === "Cart" ? (
                      <img
                        src={dottedLines}
                        alt="progress"
                        style={{ height: "1.5vh" }}
                      />
                    ) : (
                      <img
                        src={activeDottedLines}
                        alt="progress"
                        style={{ height: "1.3vh" }}
                      />
                    )}
                  </p>
                  <p className={atCart === "Details" ? "details" : ""}>
                    &nbsp;&nbsp;Details&nbsp;&nbsp;
                    {atCart === "Details" ? (
                      <img
                        src={dottedLines}
                        alt="progress"
                        style={{ height: "1.5vh" }}
                      />
                    ) : atCart === "ConfirmOrder" ? (
                      <img
                        src={activeDottedLines}
                        alt="progress"
                        style={{ height: "1.3vh" }}
                      />
                    ) : (
                      <img
                        src={inactiveDottedLines}
                        alt="progress"
                        style={{ height: "1.3vh" }}
                      />
                    )}
                  </p>
                  <p className={atCart === "ConfirmOrder" ? "order" : ""}>
                    &nbsp;&nbsp;Order
                  </p>
                </div>
                <hr />
              </div>
              {atCart === "Cart" && (
                <div className="checkout-items ">
                  <div className="flexing">{cartItems}</div>
                  <div className="total-amount">
                    <p>Total</p>
                    <p>₹ {cartCtx.totalAmount}</p>
                  </div>
                </div>
              )}
              {atCart === "Details" && (
                <Detailsform
                  getDetails={getDetailsHandler}
                  isValid={getValidityToken}
                  style={{ display: "flex", justifyContent: "center" }}
                />
              )}
              {atCart === "ConfirmOrder" && (
                <Confirmorder
                  totalAmount={cartCtx.totalAmount}
                  isValid={false}
                  finalOrderAmount={getFinalOrderAmount}
                />
              )}
            </div>
            <div className="container proceed-btn">
              <div>
                <Button
                  lbl={label}
                  proceedToDetails={proceedToDetailsHandler}
                  onBackToCart={backToCartHandler}
                  onBackToDetails={BackToDetailsHandler}
                  proceedToPlaceOrderHandler={proceedToPlaceOrderHandler}
                  showConfirmedOrderModal={showConfirmedOrder}
                  atCart={atCart}
                  isValid={isValid}
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="cart-empty-layout ">
            <div className="cart-empty">
              <p>
                <BsIcons.BsCartX />
                &nbsp; Cart is empty!
                <br />
              </p>
            </div>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button lbl={"Return to home"} />
            </Link>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default Checkout;
