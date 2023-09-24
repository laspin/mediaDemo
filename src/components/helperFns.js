// remove outer strings
// const removeOuterStrings = prop => prop.replace(/[',"]+/g, "");

/*
*  @ CloneUpdateObject
*  @param: <Object>
*  @param: <Function>

*  Iterates over each obj property and calls a function to update prop
*  Returns a new obj
* */
const cloneUpdateObject = (obj, fn) => {
  let updatedObj = Object.assign({}, obj);
  for (let p in updatedObj) {
    updatedObj[p] = fn(updatedObj[p]);
  }
  return updatedObj;
};

//import { dataPanels } from "./dataPanels";



//export const BASE_URL = "https://adspend-api.development.warc.com";
//export const FILTERS_URL = "/api/methodology/filters";
// export const FILTERS_DATA_URL = "/api/Methodology/methodologyData";
export const MARKET = "Market";
export const MEDIUM = "Medium";


/*
 *  Returns a substring to use when determining if a string relates to a market or medium.
 *  @param {string} mainType
 *  @returns {string}
 * */

// export const mainTypeDropdown = [
//   getMainTypeFilter(MARKET),
//   getMainTypeFilter(MEDIUM),
// ];

// could possibly use this enableMultiSelect true or false
// export const filterByMainType = async (name, mainType) => {
//   switch (mainType) {
//     case MARKET:
//       name?.toLowerCase()?.includes(MARKET);
//       //fetchSelectedFilters("m");
//       break;
//     case MEDIUM:
//       name?.toLowerCase()?.includes(MEDIUM);
//       break;
//     default:
//       return name;
//   }
// };

/*
 *  @param {string} mainType
 *  @param {object} dropdown options
 *  @returns {string[]}
 * */

// export const getPanelsByMainType = async (options, mainType) =>
//   options.filter(mainType => filterByMainType(mainType));

// replacing contextFn with dataPanels mock data.
//export const getPanelsBySelected = async (sele, contextFn) => dataPanels;

//export { removeOuterStrings, cloneUpdateObject };
