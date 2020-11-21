import React from "react";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
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
                href="https://www.facebook.com/bathshisha"
              >
                <FaFacebook
                  style={{ fontSize: "2rem", color: "rgb(34,34,34)" }}
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
                href="https://www.instagram.com/the_terrace_bath/"
              >
                <AiFillInstagram
                  style={{ fontSize: "2rem", color: "rgb(34,34,34)" }}
                />
              </a>{" "}
              Follow us on Instagram
            </Col>
          </Row>
        </Col>
        <Col xs="auto">
          <Row className="footer-inner-row">
            <Col>
              <MdLocalPhone
                style={{ fontSize: "2rem", color: "rgb(34,34,34)" }}
              />{" "}
              +44 1225 464449
            </Col>
          </Row>
          <Row className="footer-inner-row">
            <Col>
              <MdEmail style={{ fontSize: "2rem", color: "rgb(34,34,34)" }} />{" "}
              bella@earlbar.co.uk
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="justify-content-center footer-row"></Row>
    </Container>
  );
}
