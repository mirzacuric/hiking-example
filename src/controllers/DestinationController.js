import DestinationService from '../services/DestinationService';

export default class DestinationController {
  
  findHighestValue(req, res) {
    const { points } = req.body;
    // Remove the first element that indicates size of matrix
    points.shift();
    const destinationService = new DestinationService(points);
    destinationService.allPaths()
      .then((paths) => {
        destinationService.findHighestValueFromOptimalPath(paths)
          .then(val => res.status(200).json(val.toString()))
          .catch(err => res.status(400).json(new Error(err)));
      })
  }
}