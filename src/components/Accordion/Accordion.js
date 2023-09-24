import React, { useState, FC, ReactNode } from "react";
import { AccordionItem } from "./AccordionItem";
import "./AccordionStyles/accordion.css";
import clsx from "clsx";

export const Accordion = ({
  isLoading = false,
  data = [],
  children,
  multiple = false,
}) => {
  const [clicked, setClicked] = useState(0);
  const [expandedPanels, setExpandedPanels] = useState([]);

  if (isLoading) return <p>Loading...</p>;

  const handleClickToggle = (panelID) => {
    if (!multiple)
      setClicked((prevPanelID) => (prevPanelID === panelID ? 0 : panelID));

    //sets multiple panels open at a time
    multiple && expandedPanels.includes(panelID)
      ? setExpandedPanels(expandedPanels.filter((ix) => ix !== panelID))
      : setExpandedPanels([...expandedPanels, panelID]);
  };

  return (
    <div className={clsx("accordionContainer")}>
      <div className="accordion" data-testid="accordion__accordionComponent">
        <div className="accordionMainHeader">
          <h1 data-testid="accordion-main-header">Global</h1>
        </div>
        {children}
        <ul className="panels">
          {data?.map((itm, idx) => (
            <AccordionItem
              key={itm.id}
              handleClickToggle={handleClickToggle}
              panel={itm}
              expanded={
                (!multiple && clicked === idx + 1) ||
                (multiple && expandedPanels.includes(idx + 1))
              }
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

Accordion.displayName = "Accordion";
