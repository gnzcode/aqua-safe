"use client";
import { useState } from "react";

export default function ActivityCard({ title, description, children }) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);
  return (
    <div className={`activity ${show ? "show" : ""}`}>
      <button onClick={handleShow} className="activity__button">
        <div className="activity__label">
          <span className="activity__icon">{children}</span>
          {title}
        </div>
        <span className="activity__down">
          <i className="uil uil-angle-down"></i>
        </span>
      </button>
      <p className="activity__description">{description}</p>
    </div>
  );
}
