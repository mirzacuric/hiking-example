import { expect } from 'chai';
import {
  greatestNumberInArray,
  leastNumberInArray,
  extractValueFromNodeString,
  extractValuesFromDestinationArray
} from '../../src/utils/commonFunctions';

const mock = [ 1, 2, 3, 4, 5];

describe('Greatest and least number in array', () => {
  it('should return least number in the array', () => {
    expect(leastNumberInArray(mock)).to.equal(1);
  });

  it('should return greatest number in the array', () => {
    expect(greatestNumberInArray(mock)).to.equal(5);
  });
});

describe('Extract value from string with underscore separator', () => {
  it('should return last number after latest underscore', () => {
    expect(extractValueFromNodeString('0_2_3')).to.equal(3);
  });

  it('should return last number after latest underscore', () => {
    expect(extractValueFromNodeString('2_2_6')).to.equal(6);
  });
});

describe('Extract from array of strings', () => {
  it('should return an array of numbers', () => {
    expect(extractValuesFromDestinationArray(['0_2_2', '1_2_3', '1_1_1'])).to.eql([2, 3, 1]);
  });

  it('should return an array of numbers', () => {
    expect(extractValuesFromDestinationArray(['0_0_123', '1_0_233', '1_1_121'])).to.eql([123, 233, 121]);
  });
});