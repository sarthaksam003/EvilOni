import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import * as BsIcons from "react-icons/bs";
const ProductCard = ({ id, name, price, img, category, rating }) => {
  return (
    <Link to={`/products/${id}`} className="remove-dec">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} style={{ width: "90%" }} />
        <Card.Body>
          <Card.Title>
            {name.length > 15 ? name.substring(0, 20) + "..." : name}
          </Card.Title>
          <Card.Text className="card-body-details">
            <div>
              <div>{category}</div>
              <div>
                <span
                  style={{ fontFamily: "Mukta", fontSize: "1rem", margin: "0" }}
                >
                  Price:&nbsp;&nbsp;&nbsp;
                </span>
                <span style={{ fontFamily: "Bebas Neue", fontSize: "2rem" }}>
                  ₹ {price}
                </span>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "1.5rem",
                background: "blueviolet",
                color: "white",
                padding: "0 0.4rem",
                borderRadius: "10px",
                marginBottom: "0.6rem",
              }}
            >
              <BsIcons.BsFillStarFill /> &nbsp; {rating}
            </div>
          </Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
    </Link>
  );
};

export default ProductCard;
