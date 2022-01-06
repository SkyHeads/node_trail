import { Router } from 'express'

import { SpecificationRepository } from '../modules/cars/repositories/SpecificationsRepository'
import { CreateSpecificationsService } from '../modules/cars/services/CreateSpecificationsService'

const specificationsRouter = Router()
const specificationsRepository = new SpecificationRepository()
const createSpecificationsService = new CreateSpecificationsService(
  specificationsRepository
)

specificationsRouter.post('/', (req, res) => {
  const { name, description } = req.body

  const specification = createSpecificationsService.execute({
    name,
    description
  })

  return res.status(201).json(specification)
})

specificationsRouter.get('/', (req, res) => {
  const specification = specificationsRepository.find()

  return res.status(200).json(specification)
})

export { specificationsRouter }
