import React from "react";
import { Link } from "react-router-dom";
import classes from "./Modal.module.css";
import logo from "./assets/logo.webp";
import * as GrIcons from "react-icons/gr";

const Backdrop = (props) => {
  return (
    <React.Fragment>
      <Link to="/">
        <div className={classes.backdrop} onClick={props.onClose} />;
      </Link>
    </React.Fragment>
  );
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.closebutton}>
        <Link to="/">
          <GrIcons.GrClose
            onClick={props.onClick}
            style={{ cursor: "pointer", fontSize: "1.3rem" }}
          />
        </Link>
      </div>
      <div className={`${classes.content} ${classes.logo}`}>
        <img src={logo} alt="logo" />
        <div className={classes.orderdetails}>
          <h2> ORDER PLACED!</h2>
          <h2> ORDER ID: {props.orderId}</h2>
          <h2> Thank you for shopping</h2>
        </div>
      </div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <React.Fragment>
      <Backdrop onClose={props.hideModal} />
      <ModalOverlay onClick={props.hideModal} orderId={props.orderId}>
        {props.children}
      </ModalOverlay>
    </React.Fragment>
  );
};

export default Modal;
