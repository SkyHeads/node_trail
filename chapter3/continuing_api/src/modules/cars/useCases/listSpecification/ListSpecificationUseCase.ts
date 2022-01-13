import { Specification } from '../../models/Specification'
import { SpecificationRepository } from '../../repositories/implementations/SpecificationsRepository'

class ListSpecificationUseCase {
  // eslint-disable-next-line prettier/prettier
  constructor(private specificationRepository: SpecificationRepository) { }

  execute(): Specification[] {
    return this.specificationRepository.find()
  }
}

export { ListSpecificationUseCase }
