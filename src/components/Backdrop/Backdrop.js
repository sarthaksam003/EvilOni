import React from "react";

import "./Backdrop.css";

const Backdrop = (props) => {
  const cssClasses = [
    "Backdrop",
    props.show ? "BackdropOpen" : "BackdropClosed",
  ];

  return;

  <div className="modal-layout">
    <div className={cssClasses.join(" ")}></div>;
  </div>;
};

export default Backdrop;
