import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";

import earlLogo from "../images/logos/earllogo.png";
import secondBridgeLogo from "../images/logos/sblogo.png";

import "./styles/Landing.css";

export const Landing = () => {
  return (
    <div>
      <Container fluid className="web">
        <Row>
          <Col className="landingSecondBridge" xs={"6"}>
            <Row className="justify-content-center">
              <Col xs={"auto"}>
                <div className="logoWrapper">
                  <Link to="/home">
                    <Image className="logo" src={secondBridgeLogo} />
                  </Link>
                </div>
              </Col>
            </Row>
          </Col>
          <Col className="landingEarl" xs={"6"}>
            <Row className="justify-content-center">
              <Col xs={"auto"}>
                <div className="logoWrapper">
                  <a href="http://earlbar.co.uk">
                    <Image className="logo" src={earlLogo} />
                  </a>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      <Container fluid className="mobile">
        <Row className="landingSecondBridge justify-content-center">
          <Col className="logoWrapper" xs={"auto"}>
            <Link to="/home">
              <Image className="logo" src={secondBridgeLogo} />
            </Link>
          </Col>
        </Row>
        <Row className="landingEarl justify-content-center">
          <Col className="logoWrapper" xs={"auto"}>
            <a href="http://earlbar.co.uk">
              <Image className="logo" src={earlLogo} />
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default withRouter(Landing);
