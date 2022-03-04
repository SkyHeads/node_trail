import { Router } from 'express'
import multer from 'multer'

import { CreateCarController } from '@modules/cars/useCases/createCar/CreateCarController'
import { CreateCarImagesController } from '@modules/cars/useCases/createCarImages/CreateCarImagesController'
import { CreateCarSpecificationsController } from '@modules/cars/useCases/createCarSpecification/CreateCarSpecificationsController'
import { ListAvailableCarsController } from '@modules/cars/useCases/listAvailableCars/ListAvailableCarsController'
import { ListCarImagesController } from '@modules/cars/useCases/listCarImages/ListCarImagesController'

import uploadConfig from '../../../../config/upload'
import { ensureAdmin } from '../middlewares/ensureAdmin'

const carRouter = Router()
const upload = multer(uploadConfig.upload('tmp/cars'))

const createCarController = new CreateCarController()
const listAvailableCarsController = new ListAvailableCarsController()
const createCarSpecificationsController =
  new CreateCarSpecificationsController()
const createCarImagesController = new CreateCarImagesController()
const listCarImagesController = new ListCarImagesController()

carRouter.get('/available', listAvailableCarsController.handle)

carRouter.get('/images', listCarImagesController.handle)

carRouter.post('/', ensureAdmin, createCarController.handle)

carRouter.post(
  '/specifications/:id',
  ensureAdmin,
  createCarSpecificationsController.handle,
)

carRouter.post(
  '/images/:id',
  upload.array('images'),
  ensureAdmin,
  createCarImagesController.handle,
)

export { carRouter }
