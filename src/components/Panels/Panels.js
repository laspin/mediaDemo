import React from "react";
import Accordion from "../Accordion";
import { usePanels } from "../usePanels/usePanelsContext";

export const Panels = () => {
  const { panel, loading } = usePanels();

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <div className="cards__wrapper">
        <div className="card__component">
          {panel.cardOne.category === "market" && (
            <Accordion data={panel.cardOne.currentPanel} />
          )}
        </div>
      </div>

      <div className="cards__wrapper">
        <div className="card__component">
          {panel.cardTwo.category === "medium" && (
            <Accordion data={panel.cardTwo.currentPanel} />
          )}
        </div>
      </div>
    </>
  );
};
