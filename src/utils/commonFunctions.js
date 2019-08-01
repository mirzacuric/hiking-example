export const extractValuesFromDestinationArray = (arr) => {
  const result = arr.map(node => extractValueFromNodeString(node));
  return result;
}

export const extractValueFromNodeString = (val) => {
  const splittedValue = val.split('_');
  return parseInt(splittedValue[splittedValue.length - 1]);
}

export const greatestNumberInArray = (arr) => Math.max(...arr);

export const leastNumberInArray = (arr) => Math.min(...arr);