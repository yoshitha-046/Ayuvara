import React from "react";
import "./FeatureCard.css";

export default function FeatureCard({ id, icon, title, description, active, onClick, fullWidth }) {
  return (
    <div
      className={`feature-card ${active ? "active" : ""} ${fullWidth ? "full-width" : ""}`}
      onClick={() => onClick(id)}
    >
      <img src={icon} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}