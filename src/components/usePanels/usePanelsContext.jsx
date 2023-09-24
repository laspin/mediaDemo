/*
 *  usePanels hook along with Panels Provider allow components to access and
 *  interact with panels data.
 *
 * */

import React, { createContext, useContext, useState } from "react";
import {
  MARKET,
  MEDIUM,
  panelsInitialState,
  getMarketVariant,
  getMediumVariant,
} from "./hookUtils";

// market & medium
const isMarket = type => type?.includes(MARKET);
const isMedium = type => type?.includes(MEDIUM);
const isType = (type, str) => str?.toLowerCase()?.includes(type);

// Panels context
const PanelsContext = createContext(null);
const usePanels = () => {
  const context = useContext(PanelsContext);
  if (!context) {
    throw new Error("Make sure provider is within context (scope)");
  }

  return {
    ...context,
  };
};

// Panels provider
const PanelsProvider = ({ children }) => {
  const [panel, setPanel] = useState(panelsInitialState);
  const [activeCard, setActiveCard] = useState(undefined);

  const getFilterByVariantType = (name, type) =>
    isType(MARKET, type) ? getMarketVariant(name) : getMediumVariant(name);

  // market cardOne, medium cardTwo
  const handlePanelsUpdate = async (selected, variant) => {
    const whichCard = isType(MARKET, variant) ? "cardOne" : "cardTwo";
    setActiveCard(whichCard);
    // update panel
    const data = getFilterByVariantType(selected, variant);

    setPanel(prevPanel => ({
      ...prevPanel,
      [whichCard]: {
        ...prevPanel[whichCard],
        currentPanel: data,
        variant,
      },
    }));
  };

  const value = {
    panel,
    handlePanelsUpdate,
  };

  return (
    <PanelsContext.Provider value={value}>{children}</PanelsContext.Provider>
  );
};

export { PanelsProvider, usePanels };
