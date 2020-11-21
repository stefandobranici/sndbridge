import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import { AiOutlineFieldTime } from "react-icons/ai";
import { GoLocation } from "react-icons/go";

import Carousel from "../components/carousel/Carousel";
import LineBreak from "../components/layout/linebreak/LineBreak";

import { homePageContent } from "../repository/content";

import "./styles/Home.css";

export const Home = () => {
  return (
    <div>
      <Carousel />
      <Header />
    </div>
  );
};

const Header = () => {
  return (
    <Container fluid="lg" className="home-header">
      <Row className="justify-content-center main">
        <Col xs={12} className="justify-content-center">
          <Row>
            <Col>
              <h1>{homePageContent.mainHeaderTitle}</h1>
              <hr />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <p>{homePageContent.mainHeaderDescription}</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default withRouter(Home);
