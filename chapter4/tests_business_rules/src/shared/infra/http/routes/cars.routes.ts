import { Router } from 'express'

import { CreateCarController } from '@modules/cars/useCases/createCar/CreateCarController'
import { ListAvailableCarsController } from '@modules/cars/useCases/listAvailableCars/ListAvailableCarsController'

import { ensureAdmin } from '../middlewares/ensureAdmin'

const carRouter = Router()
const createCarController = new CreateCarController()
const listAvailableCarsController = new ListAvailableCarsController()

carRouter.get('/available', listAvailableCarsController.handle)
carRouter.post('/', ensureAdmin, createCarController.handle)

export { carRouter }
