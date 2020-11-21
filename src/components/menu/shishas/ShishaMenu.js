import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { GiBottleVapors } from "react-icons/gi";

import "./ShishaMenu.css";

export default function ShishaMenu() {
  return (
    <Container fluid className="shisha-section">
      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={8} className="shisha-section-col">
          <h1>
            {" "}
            <GiBottleVapors style={{ color: "#af9a7d" }} /> Premium Shisha
            Flavours
          </h1>
          <h3>Any Two for 25 £</h3>
          <div className="vertical-line-banner"></div>
          <Row className="justify-content-center">
            <Col xs={6} md={4}>
              <ul className="shisha-list">
                <li className="shisha-list-item">Double Apple</li>
                <li className="shisha-list-item">Frozen Lemon</li>
                <li className="shisha-list-item">Frozen Apple</li>
                <li className="shisha-list-item">Frozen Raspberry</li>
                <li className="shisha-list-item">Mint</li>
              </ul>
            </Col>
            <Col xs={6} md={4}>
              <ul className="shisha-list">
                <li className="shisha-list-item">Pear Drops</li>
                <li className="shisha-list-item">Tropical Sensation</li>
                <li className="shisha-list-item">Blue Mist</li>
                <li className="shisha-list-item">Strawberry</li>
                <li className="shisha-list-item">Watermelon</li>
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
