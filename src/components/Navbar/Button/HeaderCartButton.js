import React, {  useContext, useEffect } from "react";
import "./HeaderCartButton.css";
import * as BsIcons from "react-icons/bs";
import CartContext from "../../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const noOfItemsInCart = cartCtx.items.reduce((currentNum, item) => {
    // console.log("currentNum" + currentNum);
    // console.log("item.amount" + item.quantity);
    return currentNum + item.quantity;
  }, 0);
  const { items } = cartCtx;
  // const [btnHighlighted, setBtnHighlighted] = useState(false);
  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    // setBtnHighlighted(true);
    // const timer = setTimeout(() => {
    //   setBtnHighlighted(false);
    // }, 300);
    // return () => {
    //   clearTimeout(timer);
    // };
  }, [items, cartCtx.items.length]);
  return (
    <React.Fragment>
      <button className={`button`} onClick={props.onClick}>
        <span className="icon">
          <BsIcons.BsCartFill className="cart-icon" />
        </span>
        <span className="cart-text">
          <p>Your Cart</p>
        </span>
        <span className="badge">
          <p className="badge-text">{noOfItemsInCart}</p>
        </span>
      </button>
      {/* {toggleModal && <Cartmodal />} */}
    </React.Fragment>
  );
};

export default HeaderCartButton;
