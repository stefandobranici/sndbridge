import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./DjCardList.css";

import DjCard from "./DjCard";

export default function DjCardList({ djList }) {
  return (
    <Container class="justify-content-center">
      <Row>
        <Col xs={12} className="dj-card-list">
          {djList.map((djItem) => (
            <DjCard dj={djItem} />
          ))}
        </Col>
      </Row>
    </Container>
  );
}
