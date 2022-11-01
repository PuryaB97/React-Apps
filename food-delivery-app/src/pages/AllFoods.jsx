import React, { useState, useEffect } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";

import { Container, Row, Col } from "reactstrap";

import products from "../assets/fake-data/products";
import ProductCard from "../components/UI/product-card/ProductCart";

import "../styles/all-foods.css";

const AllFoods = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [productData, setProductData] = useState(products);

  return (
    <Helmet title="All Foods">
      <CommonSection title="All Foods" />

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="search__widget d-flex align-items-center justify-content-between w-50">
                <input
                  type="text"
                  placeholder="I'm looking for..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </Col>
            <Col lg="6" md="6" sm="6" className="mb-5">
              <div className="sorting__widget text-end">
                <select className="w-100">
                  <option>Default</option>
                  <option value="ascending">Alphabetically, A-Z</option>
                  <option value="decending">Alphabetically, Z-A</option>
                  <option value="high-price">High Price</option>
                  <option value="low-price">Low Price</option>
                </select>
              </div>
            </Col>

            {productData
              .filter((item) => {
                if (searchTerm.value === "") return item;
                if (item.title.toLowerCase().includes(searchTerm.toLowerCase()))
                  return item;
              })
              .map((item) => (
                <Col lg="3" md="4" sm="6" xs="6">
                  <ProductCard item={item} key={item.id} className="mb-4" />
                </Col>
              ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default AllFoods;
