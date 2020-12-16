import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { MdLocalPhone, MdEmail } from "react-icons/md";
import { Container, Row, Col } from "react-bootstrap";

import "./Footer.css";

export default function Footer() {
  return (
    <Container fluid className="footer">
      <Row className="justify-content-center footer-row">
        <h3>10 Manvers St Bath BA1 1JQ</h3>
      </Row>
      <Row className="justify-content-center">
        <Col xs="auto">
          <Row className="footer-inner-row">
            <Col>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/SecondBridgeNightclub/"
              >
                <FaFacebookF
                  class="social-media-link"
                  style={{ fontSize: "2rem", color: "white" }}
                />
              </a>{" "}
              Follow us on Facebook
            </Col>
          </Row>
          <Row className="footer-inner-row">
            <Col>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/secondbridgebath/"
              >
                <AiOutlineInstagram
                  class="social-media-link"
                  style={{ fontSize: "2rem", color: "white" }}
                />
              </a>{" "}
              Follow us on Instagram
            </Col>
          </Row>
        </Col>
        <Col xs="auto">
          <Row className="footer-inner-row">
            <Col>
              <a href="tel:++441225464449">
                <MdLocalPhone style={{ fontSize: "2rem", color: "white" }} />
              </a>{" "}
              +44 1225 464449
            </Col>
          </Row>
          <Row className="footer-inner-row">
            <Col>
              <a href="mailto:admin@secondbridge.co.uk">
                <MdEmail style={{ fontSize: "2rem", color: "white" }} />
              </a>{" "}
              admin@secondbridge.co.uk
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
