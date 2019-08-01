import { Router } from 'express';
import Joi from 'joi';
import payloadValidator from './middlewares/payloadValidator';
import DestinationController from './controllers/DestinationController';

const destinationController = new DestinationController();

const schemas = {
  points: Joi.array().items(
    Joi.array().items(Joi.number().positive())
  ).min(2).max(1000)
}

const router = Router();

export default [
  router.post(
    '/destination/findHighestValue',
    payloadValidator(schemas.points, 'points'),
    destinationController.findHighestValue
  )
]