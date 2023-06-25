import React,{useContext} from "react";
import "./Checkoutitem.css";
import CartContext from "../../store/cart-context";
import * as FiIcons from "react-icons/fi";

const Checkoutitem = (props) => {
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
    if (props.quantity > 1) {
      cartCtx.addItem({
        id: props.id,
        img: props.img,
        name: props.name,
        price: props.price,
        quantity: -1,
        size: props.size,
      });
    } else {
      cartCtx.removeItem(props.id);
    }
  };
  return (
    <React.Fragment>
      <div className="card">
        <div className="card-contents">
          <img className="card-img" src={props.img} alt="checkout-item" />
          <div className="card-body">
            <h2 className="card-body-heading">{props.name}</h2>
            <h4 className="card-body-size">Size: {props.size}</h4>
            <h4 className="card-body-amount">
              Quantity: {props.quantity}&nbsp;
              <FiIcons.FiPlusCircle
                className="add-remove-btn"
                onClick={addItem}
              />
              <FiIcons.FiMinusCircle
                className="add-remove-btn"
                onClick={removeItem}
              />
            </h4>
            <br />
            <br />
            <h3 className="card-body-price">₹ {props.price}</h3>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Checkoutitem;
