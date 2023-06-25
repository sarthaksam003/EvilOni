import React, { useContext, useEffect } from "react";
import Modal from "./Modal";
import classes from "./Cart.module.css";
import { Link } from "react-router-dom";
import CheckoutCartItem from "./CheckoutCartItem";
import CartContext from "../../store/cart-context";
import * as BsIcons from "react-icons/bs";
import * as IoIcons from "react-icons/io";

const Cartmodal = (props) => {
  const cartCtx = useContext(CartContext);
  const cartTotal = localStorage.getItem("totalAmount");
  const hasItemInCart = cartCtx.items.length > 0;
  let cartToMap;
  let cartInLocalStorage = JSON.parse(localStorage.getItem("items"));

  if (cartInLocalStorage !== null) {
    cartToMap = cartInLocalStorage;
  } else {
    cartToMap = cartCtx.items;
  }
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartToMap.map((cartItem) => {
        return (
          <CheckoutCartItem
            key={cartItem.id}
            id={cartItem.id}
            name={cartItem.name}
            price={cartItem.price}
            size={cartItem.size}
            img={cartItem.img}
            quantity={cartItem.quantity}
          />
        );
      })}
    </ul>
  );

  // console.log("Initial cart items cart js    " + cartItems);
  return (
    <React.Fragment>
      <Modal onClose={props.onClose} style={{width:"100%"}}>
        <div className={classes["close-btn"]}>
          <IoIcons.IoMdClose onClick={props.onClose} />
        </div>
        {!hasItemInCart ? (
          <div className={classes.emptycart}>
            <BsIcons.BsCartX />
            <p>Cart is empty</p>
          </div>
        ) : (
          <div>
            <div className={classes.order}>{cartItems}</div>
            <div className={classes.total}>
              <span>Total Amount:</span>
              <span>₹ {cartTotal}</span>
            </div>
          </div>
        )}
        <div className={classes.actions}>
          {hasItemInCart && (
            <Link to="/check-out">
              <button
                className={classes.button}
                id="order-hover"
                onClick={props.onClose}
              >
                Checkout
              </button>
            </Link>
          )}
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default Cartmodal;
