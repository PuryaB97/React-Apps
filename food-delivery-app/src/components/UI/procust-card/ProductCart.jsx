import React from "react";

import productImg from "../../../assets/images/product_2.1.jpg";

import { Link } from "react-router-dom";

const ProductCart = () => {
  return (
    <div className="product__item">
      <div className="product__img">
        <img src={productImg} alt="" />
      </div>

      <div className="product__content">
        <h5>
          <Link>Burger</Link>
        </h5>
        <div>
          <span className="product__price">$24.00</span>
          <button className="addToCart__btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
