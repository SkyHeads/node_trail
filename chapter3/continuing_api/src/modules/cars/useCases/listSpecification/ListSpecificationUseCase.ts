import { inject, injectable } from 'tsyringe'

import { Specification } from '../../entities/Specification'
import { ISpecificationsRepository } from '../../repositories/ISpecificationsRepository'

injectable()
class ListSpecificationUseCase {
  constructor(
    @inject('SpecificationsRepository')
    private specificationRepository: ISpecificationsRepository
  ) { }

  execute(): Specification[] {
    return this.specificationRepository.find()
  }
}

export { ListSpecificationUseCase }
