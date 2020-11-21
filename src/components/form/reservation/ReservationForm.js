import React from "react";
import { Alert, Form, Col, Button } from "react-bootstrap";
import emailjs, { init } from "emailjs-com";

import "./ReservationForm.css";

init("user_yhQappHxIdNjgZexNUrMi");

export default class ReservationForm extends React.Component {
  constructor(props) {
    super();
    this.state = {
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: "",
      venue: "The Earl Cocktail Bar",
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
      case "name":
        this.setState({ ...this.state, name: event.target.value });
        break;
      case "email":
        this.setState({ ...this.state, email: event.target.value });
        break;
      case "phone":
        this.setState({ ...this.state, phone: event.target.value });
        break;
      case "date":
        this.setState({ ...this.state, date: event.target.value });
        break;
      case "time":
        this.setState({ ...this.state, time: event.target.value });
        break;
      case "guests":
        this.setState({ ...this.state, guests: event.target.value });
        break;
      case "venue":
        this.setState({ ...this.state, venue: event.target.value });
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
      const templateId = "template_y4ksspl";

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
        <Alert.Heading>Your reservation has been received!</Alert.Heading>
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
          Oh snap! The reservation didn't go through. Try again!
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
        <h2>Make a Reservation</h2>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridDate">
            <Form.Label>Date</Form.Label>
            <Form.Control
              required
              type="date"
              onChange={(event) => this.handleChange(event, "date")}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridTime">
            <Form.Label>Time</Form.Label>
            <Form.Control
              required
              type="time"
              onChange={(event) => this.handleChange(event, "time")}
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder=""
              onChange={(event) => this.handleChange(event, "name")}
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
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>E-mail</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder=""
              onChange={(event) => this.handleChange(event, "email")}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCapacity">
            <Form.Label>Guests</Form.Label>
            <Form.Control
              required
              type="number"
              min="1"
              max="30"
              onChange={(event) => this.handleChange(event, "guests")}
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Select Venue</Form.Label>
            <Form.Control
              as="select"
              onChange={(event) => this.handleChange(event, "venue")}
            >
              <option value="The Earl Cocktail Bar">
                The Earl Cocktail Bar
              </option>
              <option value="The Terrace Hookah Bar">
                The Terrace Hookah Bar
              </option>
            </Form.Control>
          </Form.Group>
        </Form.Row>

        <Form.Group as={Col} contorlId="formGridCheckbox">
          <Form.Check
            required
            type="checkbox"
            label="I agree that my submitted data is being collected and stored."
            onChange={(event) => this.handleChange(event, "checkbox")}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Book
        </Button>
        {this.state.showSuccess ? this.showSuccessAlert() : null}
        {this.state.showError ? this.showErrorAlert() : null}
      </Form>
    );
  }
}
