import { Router } from 'express'

import { CreateCarController } from '@modules/cars/useCases/createCar/CreateCarController'
import { CreateCarSpecificationsController } from '@modules/cars/useCases/createCarSpecification/CreateCarSpecificationsController'
import { ListAvailableCarsController } from '@modules/cars/useCases/listAvailableCars/ListAvailableCarsController'

import { ensureAdmin } from '../middlewares/ensureAdmin'

const carRouter = Router()
const createCarController = new CreateCarController()
const listAvailableCarsController = new ListAvailableCarsController()
const createCarSpecificationsController =
  new CreateCarSpecificationsController()

carRouter.post('/', ensureAdmin, createCarController.handle)
carRouter.post(
  '/specifications/:id',
  ensureAdmin,
  createCarSpecificationsController.handle,
)
carRouter.get('/available', listAvailableCarsController.handle)

export { carRouter }
