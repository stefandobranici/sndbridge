import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Event from "./Event";

import "./EventList.css";

export default function EventList({ eventList }) {
  return (
    <Row>
      <Col xs={12} className="event-list justify-content-center">
        {eventList.map((eventItem) => (
          <Event event={eventItem} />
        ))}
      </Col>
    </Row>
  );
}
