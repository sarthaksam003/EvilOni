import React from "react";
// import "./Button.css";
import * as ImIcons from "react-icons/im";
import * as IoIcons from "react-icons/io";
import * as AiIcons from "react-icons/ai";
const Button = (props) => {
  return (
    <React.Fragment>
      <div style={{ display: "flex", justifyItems: "space-between" }}>
        {props.lbl === "Order" || props.lbl === "Place Order" ? (
          <button
            className="button"
            onClick={
              props.atCart === "Details"
                ? props.onBackToCart
                : props.onBackToDetails
            }
            style={{ border: "3px solid rgb(99, 99, 99)", width: "8.5rem" }}
          >
            <span className="icon" style={{ margin: "0 0 0.2rem 1rem" }}>
              <ImIcons.ImArrowLeft2 />
            </span>
            <span className="cart-text" style={{ margin: "0 1rem 0.2rem 0" }}>
              <p>Back</p>
            </span>
          </button>
        ) : (
          ""
        )}
        <button
          className="button"
          disabled={props.atCart === "Details" && !props.isValid}
          onClick={
            props.lbl === "Details"
              ? props.proceedToDetails
              : props.lbl === "Place Order"
              ? props.showConfirmedOrderModal
              : props.proceedToPlaceOrderHandler
          }
          style={{ border: "3px solid rgb(99, 99, 99)", width: "8.5rem" }}
        >
          <span className="cart-text">
            <p>{props.lbl}</p>
          </span>
          <span
            className="icon"
            style={{ marginRight: "1rem", marginBottom: "0.1rem" }}
          >
            {props.lbl === "Details" || props.lbl === "Order" ? (
              <ImIcons.ImArrowRight2 />
            ) : props.lbl === "Return to home" ? (
              <AiIcons.AiFillHome
                style={{ fontSize: "2rem", marginBottom: "0.6rem" }}
              />
            ) : (
              <IoIcons.IoMdCheckmarkCircleOutline
                style={{ fontSize: "2rem" }}
              />
            )}
          </span>
        </button>
      </div>
    </React.Fragment>
  );
};

export default Button;
