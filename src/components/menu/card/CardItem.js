import React from "react";
import "./Card.css";
import { Row, Col, Card } from "react-bootstrap";

export default function CardItem({ item }) {
  return (
    <Col xs={"6"} md={4} lg={3}>
      <Card className="card-item">
        <Card.Img variant="top" src={item.imgSrc} />
        <Row>
          <Col xs="12">
            <h3>{item.name}</h3>
            <p>{item.price + " £"}</p>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <ul>
              {item.ingredients.map((el, i) => (
                <li className="card-ingredient-item">{el}</li>
              ))}
            </ul>
          </Col>
        </Row>
      </Card>
    </Col>
  );
}
