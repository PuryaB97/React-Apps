import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/images/res-logo.png";
import "../../styles/footer.css";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className="footer__logo text-start">
              <img src={logo} alt="logo" />
              <h5>Tasty Treat</h5>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
                aliquid
              </p>
            </div>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Delivery Time</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Sunday - Thursday</span>
                <p>10:00am - 11:00px</p>
              </ListGroupItem>
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Friday - Sturday</span>
                <p>Off day</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Contact</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <p>Location: Ankara, Çankaya Ziyagökalp cad. no: 43/24</p>
              </ListGroupItem>

              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Phone: +01 7123456765</span>
              </ListGroupItem>
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Email: example@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Newsletter</h5>
            <p>Subscribe our newsletter</p>
            <div className="newsletter">
              <input type="email" placeholder="Enter your email" />
              <span>
                <i className="ri-send-plane-line"></i>
              </span>
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col lg="6" md="6">
            <p className="copyright__text">
              Copyright - 2022, website made by Pouriya Behdarvandan. All Rights
              Reserved
            </p>
          </Col>
          <Col lg="6" md="6">
            <div className="social__links d-flex align-item-center gap-4 justify-content-end">
              <p className="m-0">Follow: </p>
              <span>
                <Link to="https://twitter.com/Sophrosyne97">
                  <i className="ri-twitter-fill"></i>
                </Link>
              </span>
              <span>
                <Link to="https://github.com/PuryaB97">
                  <i className="ri-github-fill"></i>
                </Link>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
