import React from "react";

import "./VisitUs.css";

export default function VisitUs() {
  return (
    <div className="visit-us-container">
      <div className="visit-us-inner-content">
        <h1>Visit The Earl & Terrace</h1>
        <h2>
          Looking for something more relaxing? Visit our cocktail and shisha
          bar!
        </h2>
        <a href="https://earlbar.co.uk/">
          <button type="button" className="btn-primary-main">
            The Earl & Terrace
          </button>
        </a>
      </div>
    </div>
  );
}
