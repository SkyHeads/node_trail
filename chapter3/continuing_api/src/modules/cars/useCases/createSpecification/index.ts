import { SpecificationRepository } from '../../repositories/implementations/SpecificationsRepository'
import { CreateSpecificationController } from './CreateSpecificationController'
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase'

const specificationRepository = null
const createSpecificationUseCase = new CreateSpecificationUseCase(
  specificationRepository
)
const createSpecificationController = new CreateSpecificationController(
  createSpecificationUseCase
)

export { createSpecificationController }
