import React from "react";
import "./AccordionStyles/accordion.css";

export const AccordionHeader = ({ title, expanded }) => {
  return (
    <div
      data-testid="accordion__accordionHeader"
      className="accordionHeader">
      <h3>{title}</h3>
      <span className={`arrow${expanded ? " arrowUp" : " arrowDown"}`}>
        ↓
      </span>
    </div>
  );
};
