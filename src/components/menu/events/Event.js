import React from "react";
import { Col } from "react-bootstrap";

import "./Event.css";

export default function Event({ event }) {
  return (
    <article className="event">
      <img src={event} />
    </article>
  );
}
