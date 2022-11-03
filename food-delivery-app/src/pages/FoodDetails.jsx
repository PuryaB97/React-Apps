import React from "react";

import products from "../assets/fake-data/products";
import { useParams } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";

import "../styles/product-details.css";

import productImg from "../assets/images/product_01.1.jpg";

const FoodDetails = () => {
  return (
    <Helmet title="Product-details">
      <CommonSection title="prodcuts 01" />

      <section>
        <Container>
          <Row>
            <Col lg="2" md="2">
              <div className="products__images">
                <div className="img__item">
                  <img src={productImg} alt="" className="w-50" />
                </div>
                <div className="img__item">
                  <img src={productImg} alt="" className="w-50" />
                </div>
                <div className="img__item">
                  <img src={productImg} alt="" className="w-50" />
                </div>
              </div>
            </Col>

            <Col lg="4" md="4">
              <div className="product__main-img">
                <img src={productImg} alt="" className="w-100" />
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="single__product-content">
                <h2 className="product__title mb-3">Pizza with mushroom</h2>
                <p className="product__price">
                  Price: <span>$34</span>
                </p>
                <p className="category mb-5">
                  Category: <span>Burger</span>
                </p>

                <button className="addToCart__btn">Add to Cart</button>
              </div>
            </Col>

            <Col lg="12">
              <div className="tabs d-flex align-items-center gap-3 py-2">
                <h6>Description</h6>
                <h6>Review</h6>
              </div>

              <div className="tab__content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Culpa aperiam magnam corrupti illo autem? Laudantium, ratione,
                  exercitationem doloribus eaque molestias aliquam ipsum ut
                  velit cum ad provident. Culpa recusandae saepe tempore qui a
                  odio facilis facere. Laboriosam itaque natus tenetur fugiat
                  ratione a cumque voluptates id non? Sequi, recusandae
                  excepturi.
                </p>
              </div>

              <div className="tab__form">
                <div className="form">
                  <div className="form__group">
                    <input type="text" placeholder="Enter your name" />
                  </div>

                  <div className="form__group">
                    <input type="text" placeholder="Enter your name" />
                  </div>

                  <div className="form__group">
                    <textarea
                      rows={5}
                      type="type"
                      placeholder="Enter your message"
                    />
                  </div>

                  <button type="submit" className="addToCart__btn">
                    Submit
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default FoodDetails;
