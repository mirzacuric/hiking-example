import { Router } from 'express';
import DestinationController from './controllers/DestinationController';

const destinationController = new DestinationController();

const router = Router();

export default [
  router.post('/destination/findHighestValue', destinationController.findHighestValue)
]