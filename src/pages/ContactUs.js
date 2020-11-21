import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContactForm from "../components/form/contact/ContactForm";
import Banner from "../components/layout/banner/Banner";

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
      <Row className="justify-content-center" style={{ marginBottom: "50px" }}>
        <Col xs={12} md={6}>
          <ContactForm />
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
