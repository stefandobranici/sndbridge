import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContactForm from "../components/form/contact/ContactForm";
import Banner from "../components/layout/banner/Banner";
import { AiOutlineFieldTime } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { MdLocalPhone, MdEmail } from "react-icons/md";

import "./styles/ContactUs.css";

export const ContactUs = () => {
  return (
    <Container fluid className="contact-us-container">
      <Row>
        <Banner
          title="Contact Us"
          subtitle="Reach out to us or make a booking for a night out"
        />
      </Row>
      <Row
        className="justify-content-center"
        style={{ marginBottom: "50px" }}
        xs={12}
      >
        <Col xs={6} md={3} lg={2} style={{ textAlign: "center" }}>
          <h3>
            <AiOutlineFieldTime style={{ color: "#af9a7d" }} /> When
          </h3>
          <h6>Monday</h6>
          <p>18:00 - 22:00</p>
          <h6>Wednesday</h6>
          <p>18:00 - 22:00</p>
          <h6>Friday</h6>
          <p>18:00 - 22:00</p>
          <h6>Saturday</h6>
          <p>12:00 - 22:00</p>
        </Col>
        <Col xs={6} md={3} lg={2} style={{ textAlign: "center" }}>
          <h3>
            <GoLocation style={{ color: "#af9a7d" }} /> Where
          </h3>
          <p>10 Manvers St Bath BA1 1JQ</p>
          <h3 style={{ marginTop: "50px" }}>
            <MdLocalPhone style={{ color: "#af9a7d" }} /> Phone
          </h3>
          <p>+44 1225 464449</p>
          <h3 style={{ marginTop: "50px" }}>
            <MdEmail style={{ color: "#af9a7d" }} /> Email
          </h3>
          <p>admin@secondbridge.co.uk</p>
        </Col>
      </Row>
      <Row className="justify-content-center" style={{ marginBottom: "50px" }}>
        <Col xs={12} md={6}>
          <ContactForm />
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
