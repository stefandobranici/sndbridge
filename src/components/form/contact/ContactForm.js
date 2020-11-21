import React from "react";
import { Alert, Form, Col, Button } from "react-bootstrap";
import emailjs, { init } from "emailjs-com";

import "./ContactForm.css";

init("user_yhQappHxIdNjgZexNUrMi");

export default class ContactForm extends React.Component {
  constructor(props) {
    super();
    this.state = {
      email: "",
      phone: "",
      message: "",
      validated: false,
      showError: false,
      showSuccess: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event, type) {
    event.preventDefault();

    switch (type) {
      case "email":
        this.setState({ ...this.state, email: event.target.value });
        break;
      case "phone":
        this.setState({ ...this.state, phone: event.target.value });
        break;
      case "message":
        this.setState({ ...this.state, message: event.target.value });
        break;
      default:
        break;
    }

    this.setState({ feedback: event.target.value });
  }

  handleSubmit(event) {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    this.setState({ ...this.state, validated: true });

    event.preventDefault();

    if (form.checkValidity() === true) {
      const templateId = "template_37zi3b9";

      this.sendFeedback(templateId, this.state);
    }
  }

  sendFeedback(templateId, variables) {
    emailjs
      .send("service_6uomf3r", templateId, variables)
      .then((res) => {
        console.log("Email successfully sent!");
        this.setShow("success", true);
      })
      // Handle errors here however you like, or use a React error boundary
      .catch((err) => {
        console.error(err);
        this.setShow("error", true);
      });
  }

  setShow(type, show) {
    switch (type) {
      case "error":
        this.setState({ ...this.state, showError: show });
        break;
      case "success":
        this.setState({ ...this.state, showSuccess: show });
        break;
      default:
        break;
    }
  }

  showSuccessAlert() {
    return (
      <Alert
        variant="success"
        onClose={() => this.setShow("success", false)}
        dismissible
        style={{
          marginTop: "20px",
        }}
      >
        <Alert.Heading>Your message has been received!</Alert.Heading>
      </Alert>
    );
  }

  showErrorAlert() {
    return (
      <Alert
        variant="danger"
        onClose={() => this.setShow("error", false)}
        dismissible
        style={{
          marginTop: "20px",
        }}
      >
        <Alert.Heading>
          Oh snap! The message didn't go through. Try again!
        </Alert.Heading>
      </Alert>
    );
  }

  render() {
    return (
      <Form
        noValidate
        validated={this.state.validated}
        class="bookingForm"
        onSubmit={this.handleSubmit}
      >
        <h2>Send us a Message</h2>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>E-mail</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder=""
              onChange={(event) => this.handleChange(event, "email")}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              required
              type="tel"
              onChange={(event) => this.handleChange(event, "phone")}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridMessage">
            <Form.Label>Your message:</Form.Label>
            <Form.Control
              required
              size="lg"
              as="textarea"
              rows="10"
              placeholder=""
              onChange={(event) => this.handleChange(event, "message")}
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} contorlId="formGridCheckbox">
            <Form.Check
              required
              type="checkbox"
              label="I agree that my submitted data is being collected and stored."
              onChange={(event) => this.handleChange(event, "checkbox")}
            />
          </Form.Group>
        </Form.Row>

        <Button variant="primary" type="submit">
          Send message
        </Button>
        {this.state.showSuccess ? this.showSuccessAlert() : null}
        {this.state.showError ? this.showErrorAlert() : null}
      </Form>
    );
  }
}
