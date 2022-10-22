import React from "react";

import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";

import heroImg from "../assets/images/hero.png";

import "../styles/hero-section.css";

const Home = () => {
  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <h5 className="mb-3">Easy way to make an order</h5>
                <h1 className="mb-4">
                  <span>Hungry?</span> just wait food at<span> your door</span>
                </h1>

                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dolor repellendus ea quae, beatae debitis blanditiis?
                </p>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="hero-img" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
