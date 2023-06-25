import React from "react";
import "./Confirmorder.css";

const Confirmorder = (props) => {
  const gstontheamount = +(props.totalAmount * 0.02).toFixed(2);
  const finalOrderAmount = props.totalAmount + gstontheamount;
  props.finalOrderAmount(finalOrderAmount);
  return (
    <React.Fragment>
      <div>
        <div className="container ctr">
          <div className="container">
            <div className="bill-details">
              <h1>Bill details</h1>
              <div>
                <p>Cart Total</p>
                <p>₹ {props.totalAmount}</p>
              </div>
              <div>
                <p>GST</p>
                <p>₹ {gstontheamount}</p>
              </div>
              <div>
                <p>Shipping Charges</p>
                <p>₹0</p>
              </div>
              <hr />
              <div>
                <p style={{ marginTop: "3vh", fontSize: "5vh" }}>
                  Total Payable Amount
                </p>
                <p style={{ marginTop: "3vh", fontSize: "5vh" }}>
                  ₹ {finalOrderAmount}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Confirmorder;
