import React from "react";
import { ListGroupItem } from "reactstrap";
import productImg from "../../../assets/images/product_01.1.jpg";

const CartItem = () => {
  return (
    <ListGroupItem className="cart__item-info">
      <img src={productImg} alt="product img" />

      <div className="cart__product-info">
        <div>
          <h6>Burger</h6>
          <p>
            2x <span>$24.00</span>
          </p>
          <div>
            <span>
              <i className="ri-add-line"></i>
            </span>
          </div>
          <span>2</span>
          <span>
            <i className="ri-subtract-line"></i>
          </span>
        </div>

        <span>
          <i className="ri-close-line"></i>
        </span>
      </div>
    </ListGroupItem>
  );
};

export default CartItem;
