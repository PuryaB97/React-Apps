import React from "react";

import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import "../styles/cart-page.css";

import { useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import { cartActions } from "../components/store/shopping-cart/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <Helmet title="Cart">
      <CommonSection title="Your Cart" />

      <section>
        <Container>
          <Row>
            <Col lg="12">
              {cartItems.length === 0 ? (
                <h5 className="text-center">Your cart is empty</h5>
              ) : (
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Product Title</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <Tr item={item} key={item.id} />
                    ))}
                  </tbody>
                </table>
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

const Tr = (props) => {
  const { image01, title, price, quantity } = props.item;

  return (
    <tr>
      <td className="text-center cart__img-box">
        <img src={image01} alt="" className="w-75" />
      </td>
      <td className="text-center">{title}</td>
      <td className="text-center">${price}</td>
      <td className="text-center">{quantity}px</td>
      <td className="text-center cart__item-del">
        <i className="ri-delete-bin-5-line"></i>
      </td>
    </tr>
  );
};

export default Cart;
