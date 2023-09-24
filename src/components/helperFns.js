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

//export const BASE_URL = "https://adspend-api.development.warc.com";
//export const FILTERS_URL = "/api/methodology/filters";
// export const FILTERS_DATA_URL = "/api/Methodology/methodologyData";
