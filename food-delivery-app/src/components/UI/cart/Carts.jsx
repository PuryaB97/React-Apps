import React from "react";

import { ListGroup } from "reactstrap";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

import "../../../styles/shopping-cart.css";

const Carts = () => {
  return (
    <div className="cart__container">
      <ListGroup className="cart">
        <div className="cart__close">
          <span>
            <i className="ri-close-fill"></i>
          </span>
        </div>

        <div className="cart__item-list">
          <CartItem />
        </div>

        <div className="cart__bottom">
          <h6>
            Subtotal amount: <span>$123</span>
          </h6>
          <button>
            <Link to="./checkout">Checkout</Link>
          </button>
        </div>
      </ListGroup>
    </div>
  );
};

export default Carts;
