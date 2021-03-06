import React from "react";
import { Row, Col } from "react-bootstrap";
import Event from "./Event";

import "./EventList.css";

export default function EventList({ eventList }) {
  return (
    <Row className="justify-content-center">
      <Col xs={12} className="justify-content-center">
        <p style={{ textAlign: "center" }}>
          Here at Second Bridge we run only the biggest & best nightlife events
          in Bath, just take a look!
        </p>
      </Col>
      <Col xs={12} className="event-list-desktop justify-content-center">
        {eventList.map((eventItem) => (
          <Event event={eventItem} />
        ))}
      </Col>
      <div className="event-list-mobile">
        {eventList.map((eventItem) => (
          <Col xs={12}>
            <Event event={eventItem} />
          </Col>
        ))}
      </div>
    </Row>
  );
}
