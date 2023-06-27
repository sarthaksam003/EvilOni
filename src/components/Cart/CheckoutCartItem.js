import React, { useContext } from "react";
import classes from "./CheckoutCartItem.module.css";
import * as AiIcons from "react-icons/ai";
import CartContext from "../../store/cart-context";

const CheckoutCartItem = (props) => {
  // console.log("from checkoutCartItem");
  const cartCtx = useContext(CartContext);
  const addItem = () => {
    cartCtx.addItem({
      id: props.id,
      img: props.img,
      name: props.name,
      price: props.price,
      quantity: 1,
      size: props.size,
    });
  };
  const removeItem = () => {
    cartCtx.removeItem(props.id);
  };

  return (
    // <div className="container">
    //   <div className={classes["checkout-item-card"]}>
    //     <div className={classes["checkout-item-card-itemimg"]}>
    //       <img src={props.img} alt={props.name} />
    //     </div>
    //     <div className={classes["checkout-item-card-itemname"]}>
    //       <div>{props.name}</div>
    //       <div className={classes["checkout-item-card-pricesizequantity"]}>
    //         <p>Size: {props.size}</p>
    //         <p>Price: {props.price}</p>
    //         <p>Quantity: {props.quantity}</p>
    //       </div>
    //       <div className={classes["add-remove"]}>
    //         <AiIcons.AiOutlinePlusCircle
    //           className={classes["add-remove-btn"]}
    //           onClick={addItem}
    //         />
    //         <AiIcons.AiOutlineMinusCircle
    //           className={classes["add-remove-btn"]}
    //           onClick={removeItem}
    //         />
    //       </div>
    //     </div>
    //     <div className={classes["checkout-item-card-itemname"]}></div>
    //   </div>
    // </div>
    <div className="container">
      <div className={classes["checkout-item-card"]}>
        <div className={classes["checkout-item"]}>
          <div className={classes["checkout-item-card-itemname"]}>
            <div>{props.name}</div>
            <div className={classes["checkout-item-card-pricesizequantity"]}>
              <div>Size: {props.size}</div>
              <div>Price: {props.price}</div>
            </div>

            <div className={classes["add-remove"]}>
            <div>Quantity: {props.quantity}</div>
              <AiIcons.AiOutlinePlusCircle
                className={classes["add-remove-btn"]}
                onClick={addItem}
              />
              <AiIcons.AiOutlineMinusCircle
                className={classes["add-remove-btn"]}
                onClick={removeItem}
              />
            </div>
          </div>
          <div className={classes["item-img"]}>
            <img
              src={props.img}
              alt={props.name}
              style={{ width: "100%", borderRadius: "8px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCartItem;
