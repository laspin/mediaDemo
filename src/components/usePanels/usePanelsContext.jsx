import React, { createContext, useContext } from "react";
import { dataOne, dataTwo, dataThree, dataFour } from "../Panels/dataPanels";

export const MARKET = "Market";
export const MEDIUM = "Medium";

const allPanels = [dataOne, dataTwo, dataThree, dataFour];

// Panels context
const PanelsContext = createContext(null);

// usePanels hook
const usePanels = () => React.useContext(PanelsContext);

// variant type
const isMarket = type => type.toLowerCase()?.includes(MARKET);
const isMedium = type => type.toLowerCase()?.includes(MEDIUM);

// data by variant
const getMarketVariant = mkt => {
  let varmar;
  switch (mkt) {
    case "GERMANY":
      varmar = dataOne;
      break;
    case "SPAIN":
      varmar = dataTwo;
      break;
    case "UKRAINE":
      varmar = dataThree;
      break;
    case "MEXICO":
      varmar = dataFour;
      break;
    case "NONE":
      varmar = "";
      break;
    default:
      varmar = "";
      break;
  }
  return vardata;
};
const getMediumVariant = med => {
  let varmed;
  switch (med) {
    case "PUBLISHING":
      varmed = dataOne;
      break;
    case "PRODUCTION":
      varmed = dataTwo;
      break;
    case "MEDIA":
      varmed = dataThree;
      break;
    case "DISTRIBUTION":
      varmed = dataFour;
      break;
    case "NONE":
      varmed = "";
      break;
    default:
      varmed = "";
      break;
  }
  return vardata;
};

//item,category
const getFilterByVariantType = async (name, type) =>
  isMarket(type)
    ? getMarketVariant()
    : isMedium(type)
    ? getMediumVariant()
    : "neither market or medium";

// Panels provider
const PanelsProvider = ({ children }) => {
  const [panels, setPanels] = React.useState([]);

  // update panels based on market or medium
  const updatePanels = async selected => {
    // ex: market, germany
    const results = await getFilterByVariantType(
      selected.item,
      selected.category
    );
    console.log("results ", results);
    setPanels(results);
  };

  const handleCategoryUpdate = sele => {
    updateCategory(sele);
  };
  const handlePanelsUpdate = value => {
    setPanels(value);
  };

  return (
    <PanelsContext.Provider value={{ panels, handlePanelsUpdate,handleCategoryUpdate }}>
      {children}
    </PanelsContext.Provider>
  );
};

export { PanelsProvider, usePanels, allPanels };
