import React from "react";
import "./DjCard.css";

export default function DjCard({ dj }) {
  return (
    <article class="dj-card">
      <header class="dj-card-header">
        <a
          class="dj-avatar"
          href={dj.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={dj.profile} alt="" />
        </a>
        <h2>{dj.name}</h2>
        <p>{dj.description}</p>
      </header>
    </article>
  );
}
