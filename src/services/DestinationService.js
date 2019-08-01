import Graph from 'graph-data-structure';
import {
  extractValuesFromDestinationArray,
  greatestNumberInArray,
  leastNumberInArray
} from '../utils/commonFunctions';

export default class DestinationService {
  constructor(matrix) {
    this.graph = Graph();

    this.sources = [];
    this.destinations = [];
    this.nodes = [];
    this.edges = [];

    this.sourceArray = matrix;
    this.init();
  }

  init() {
    this.sourceArray.forEach((itemArr, index) => {
      itemArr.forEach((item, i) => {
        this.graph.addNode(`${index}_${i}_${item}`);
        
        if(i === 0) { // Sources are found on each nested array at the first index
          this.sources.push(`${index}_${i}_${item}`);
        }

        if(i === itemArr.length - 1) { // Destinations are found on each nested array at the latest index
          this.destinations.push(`${index}_${i}_${item}`);
        }

        if (index > 0) { // Used to handle upper EDGE
          this.graph.addEdge(
            `${index}_${i}_${item}`,
            `${index-1}_${i}_${this.sourceArray[index-1][i]}`,
            this.sourceArray[index-1][i] - item
          );
        }

        if (index < this.sourceArray.length - 1) { // Used to handle bottom EDGE
          this.graph.addEdge(
            `${index}_${i}_${item}`,
            `${index+1}_${i}_${this.sourceArray[index+1][i]}`,
            this.sourceArray[index+1][i] - item
          );
        }

        if (i > 0) { // Used to handle left EDGE
          this.graph.addEdge(
            `${index}_${i}_${item}`,
            `${index}_${i-1}_${itemArr[i-1]}`,
            itemArr[i-1] - item
          );
        }

        if (i < itemArr.length - 1) { // Used to handle right EDGE
          this.graph.addEdge(
            `${index}_${i}_${item}`,
            `${index}_${i+1}_${itemArr[i+1]}`,
            itemArr[i+1] - item
          );
        }
      });
    });
  }

  allPaths() {
    return new Promise((resolve, reject) => {
      const allPaths = [];
      try {
        // Generate an array of all possible paths from sources to destinations
        this.sources.forEach(source => {
          this.destinations.forEach(destination => {
            allPaths.push(this.graph.shortestPath(source, destination));
          });
        });
        resolve(allPaths);
      } catch (e) {
        reject(e)
      }
    });
  }

  findHighestValueFromOptimalPath(paths) {
    return new Promise((resolve, reject) => {
      try {
        // Extract all values from paths
        const nodesValues = paths.map(path => extractValuesFromDestinationArray(path));
        // Generate an array of highest values from nodes
        const maxValues = nodesValues.map(valuesArr => greatestNumberInArray(valuesArr));
        // Return the smallest value from array of max values
        resolve(leastNumberInArray(maxValues));
      } catch (error) {
        reject(error);
      }
    })
  }
}