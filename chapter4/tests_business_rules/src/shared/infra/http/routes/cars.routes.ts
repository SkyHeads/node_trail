import { Router } from 'express'

import { CreateCarController } from '@modules/cars/useCases/createCar/CreateCarController'

import { ensureAdmin } from '../middlewares/ensureAdmin'

const carRouter = Router()
const createCarController = new CreateCarController()

carRouter.post('/', ensureAdmin, createCarController.handle)

export { carRouter }
