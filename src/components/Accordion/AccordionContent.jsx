import React, { FC } from "react";
import "./AccordionStyles/accordion.css";
import clsx from "clsx";

export const AccordionContent = ({
  body,
  heading,
  expanded,
}) => {
  const rowItems = [body.row1, body.row2, body.row3, body.row4, body.row5];

  return (
    <div
      className={clsx(
        "accordionContent",
        expanded && "expanded",
        !expanded && "collapsed"
      )}
    >
      <div className="gridCard">
        <div className="tableHeading">
          {heading.map((itm, index) => (
            <div className={`tableCell cell${index + 1}`} key={index}>
              {itm}
            </div>
          ))}
        </div>

        {rowItems.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="tableRow"
            style={{ height: `${expanded ? "auto" : 0}` }}
          >
            {row.map((cell, cellIndex) => (
              <div className={`tableCell cell${cellIndex + 1}`} key={cellIndex}>
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
