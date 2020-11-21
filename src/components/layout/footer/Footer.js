import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { Container, Row, Col } from "react-bootstrap";

import "./Footer.css";

export default function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/SecondBridgeNightclub/"
          >
            <FaFacebookF
              class="social-media-link"
              style={{ fontSize: "1.5rem", color: "white" }}
            />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/secondbridgebath/"
          >
            <AiOutlineInstagram
              class="social-media-link"
              style={{ fontSize: "2rem", color: "white" }}
            />
          </a>
        </Col>
      </Row>
    </Container>
  );
}
