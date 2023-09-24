/*
 *  usePanels takes user interactions at one component to then render some data at another
 *  component (Accordion's parent component) and or any other component within Provider's
 *  scope. Since data fetched at Provider, loading state also passed.
 * */

import React, { createContext, useContext, useState, useEffect } from "react";
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
  const [loading, setLoading] = useState(false);
  const [activeCard, setActiveCard] = useState(undefined);

  const getFilterByVariantType = (name, type) =>
    isType(MARKET, type) ? getMarketVariant(name) : getMediumVariant(name);

  // market cardOne, medium cardTwo
  const handlePanelsUpdate = async (selected, variant) => {
    setLoading(true);
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

  useEffect(() => {
    setLoading(false);
  }, [loading]);

  const value = {
    panel,
    handlePanelsUpdate,
    loading,
  };

  return (
    <PanelsContext.Provider value={value}>{children}</PanelsContext.Provider>
  );
};

export { PanelsProvider, usePanels };
