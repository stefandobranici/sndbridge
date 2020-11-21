import React from "react";

import "./Event.css";

export default function Event({ event }) {
  return (
    <article className="event">
      <img src={event} alt="" />
    </article>
  );
}
