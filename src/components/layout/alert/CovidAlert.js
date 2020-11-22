import React from "react";
import { Alert } from "react-bootstrap";

export default function CovidAlert() {
  return (
    <Alert variant="info">
      <Alert.Heading style={{ "margin-top": "30px", textAlign: "center" }}>
        We are temporarily closed due to COVID-19.
      </Alert.Heading>
      <p style={{ color: "black", textAlign: "center" }}>
        Missing us? Order Cocktail Masterclass kits & Home Delivered Shisha now!
        Click{" "}
        {
          <a
            href="https://www.shishandshake.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "red" }}
          >
            here
          </a>
        }
        !
      </p>
    </Alert>
  );
}
