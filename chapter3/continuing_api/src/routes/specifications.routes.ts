import { Router } from 'express'

import { createSpecificationController } from '../modules/cars/useCases/createSpecification'
import { listSpecificationController } from '../modules/cars/useCases/listSpecification'

const specificationsRouter = Router()

specificationsRouter.post('/', (req, res) => {
  return createSpecificationController.handle(req, res)
})

specificationsRouter.get('/', (req, res) => {
  return listSpecificationController.handle(req, res)
})

export { specificationsRouter }
