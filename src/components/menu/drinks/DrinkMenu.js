import React from "react";
import { Container, Tabs, Tab, Row, Col } from "react-bootstrap";
import CardItem from "../card/CardItem";
import "./DrinkMenu.css";

export default function DrinkMenu({ menu }) {
  return (
    <Tabs id="uncontrolled-tab-example" className="tabs">
      {menu.map((menu, i) => {
        return (
          <Tab eventKey={menu.type} title={menu.type}>
            <Container className="menu-list justify-content-center">
              <Row>
                <Col>
                  <h3>{menu.deal}</h3>
                  <hr />
                </Col>
              </Row>
              <Row className="justify-content-center">
                {menu.submenu.map((item) => {
                  return <CardItem item={item} />;
                })}
              </Row>
            </Container>
          </Tab>
        );
      })}
    </Tabs>
  );
}
