import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";

import Carousel from "../components/carousel/Carousel";
import Banner from "../components/layout/banner/Banner";
import DjCardList from "../components/menu/dj/DjCardList";
import ImageGallery from "../components/image-gallery/ImageGallery";
import EventList from "../components/menu/events/EventList";
import CovidAlert from "../components/layout/alert/CovidAlert";

import { events } from "../repository/events";
import { djsRepository } from "../repository/djs";
import { homePageContent } from "../repository/content";
import { subGallery } from "../repository/gallery";

import "./styles/Home.css";

export const Home = () => {
  return (
    <div>
      <Carousel />
      <CovidAlert />
      <Header />
      <Djs />
      <Events />
      <Gallery />
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

const Djs = () => {
  return (
    <div>
      <Banner
        title="Our DJs"
        subtitle="Only bringing in the very best artists of the South-West"
      />
      <DjCardList djList={djsRepository} />
    </div>
  );
};

const Events = () => {
  return (
    <div>
      <Banner
        title="Our Events"
        subtitle="Checkout our past & upcoming events now!"
      />
      <EventList eventList={events} />
    </div>
  );
};

const Gallery = () => {
  return (
    <div>
      <Banner
        title="Gallery"
        subtitle="Check out photos taken from our venue"
      />{" "}
      <ImageGallery gallery={subGallery} />
    </div>
  );
};

export default withRouter(Home);
