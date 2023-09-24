export const MARKET = "market";
export const MEDIUM = "medium";
// panels data
import { dataOne, dataTwo, dataThree, dataFour } from "../Panels/dataPanels";

// market & medium init state
export const panelsInitialState = {
  cardOne: {
    currentPanel: dataOne,
    category: "market",
  },
  cardTwo: {
    currentPanel: dataTwo,
    category: "medium",
  },
};

// market and medium options
export const getMarketVariant = mkt => {
  switch (mkt) {
    case "Germany":
      return dataOne;
    case "Spain":
      return dataTwo;
    case "Ukraine":
      return dataThree;
    case "Mexico":
      return dataFour;
    case "None":
      return [...initialState];
    default:
      return [];
  }
};

export const getMediumVariant = med => {
  switch (med) {
    case "Publishing":
      return dataOne;
    case "Production":
      return dataTwo;
    case "Media":
      return dataThree;
    case "Distribution":
      return dataFour;
    case "None":
      return [...initialState];
    default:
      return [];
  }
};
