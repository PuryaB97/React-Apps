import React, { useState, useEffect } from "react";

import products from "../assets/fake-data/products";
import { useParams } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";

import "../styles/product-details.css";

import productImg from "../assets/images/product_01.1.jpg";

const FoodDetails = () => {
  const [tab, setTap] = useState("desc");

  const { id } = useParams();

  const product = products.find((product) => product.id === id);

  const [previewImg, setPreviewImg] = useState(product.image01);

  const { title, price, category, desc } = product;

  return (
    <Helmet title="Product-details">
      <CommonSection title={title} />

      <section>
        <Container>
          <Row>
            <Col lg="2" md="2">
              <div className="products__images">
                <div
                  className="img__item mb-2"
                  onClick={() => setPreviewImg(product.image01)}
                >
                  <img src={product.image01} alt="" className="w-50" />
                </div>
                <div
                  className="img__item mb-2"
                  onClick={() => setPreviewImg(product.image02)}
                >
                  <img src={product.image02} alt="" className="w-50" />
                </div>
                <div
                  className="img__item mb-2"
                  onClick={() => setPreviewImg(product.image03)}
                >
                  <img src={product.image03} alt="" className="w-50" />
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
                <h2 className="product__title mb-3">{product.title}</h2>
                <p className="product__price">
                  Price: <span>${product.price}</span>
                </p>
                <p className="category mb-5">
                  Category: <span>{product.category}</span>
                </p>

                <button className="addToCart__btn">Add to Cart</button>
              </div>
            </Col>

            <Col lg="12">
              <div className="tabs d-flex align-items-center gap-3 py-2">
                <h6
                  className={`${tab === "desc" ? "tab__active" : ""} `}
                  onClick={() => setTap("desc")}
                >
                  Description
                </h6>
                <h6
                  className={`${tab === "rev" ? "tab__active" : ""} `}
                  onClick={() => setTap("rev")}
                >
                  Review
                </h6>
              </div>

              {tab === "desc" ? (
                <div className="tab__content">
                  <p>{product.desc}</p>
                </div>
              ) : (
                <div className="tab__form mb-3">
                  <div className="review pt-5">
                    <p className="user__name mb-0">Jhon Doe</p>
                    <p className="user__email">example@mail.com</p>
                    <p className="feedback__text">great product</p>
                  </div>

                  <div className="review">
                    <p className="user__name mb-0">Jhon Doe</p>
                    <p className="user__email">example@mail.com</p>
                    <p className="feedback__text">great product</p>
                  </div>

                  <div className="review">
                    <p className="user__name mb-0">Jhon Doe</p>
                    <p className="user__email">example@mail.com</p>
                    <p className="feedback__text">great product</p>
                  </div>

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
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default FoodDetails;
