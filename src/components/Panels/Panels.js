import React from "react";
import Accordion from "../Accordion";
import { dataOne, dataTwo } from "./dataPanels";

export const Panels = () => {
  console.log("data in panels ", dataOne, dataTwo);

  return (
    <>
      <div className="cards__wrapper">
        <div className="card__component">
          {dataOne && (
            <Accordion data={dataOne} />
          )}


        </div>
      </div>

      <div className="cards__wrapper">
        <div className="card__component">
          {dataTwo && (
            <Accordion data={dataTwo} />
          )}
        </div>
      </div>
    </>
  );
};
