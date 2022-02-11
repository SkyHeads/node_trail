import { inject, injectable } from 'tsyringe'

import { Specification } from '@modules/cars/entities/Specification'
import { ISpecificationsRepository } from '@modules/cars/repositories/ISpecificationsRepository'


@injectable()
class ListSpecificationUseCase {
  constructor(
    @inject('SpecificationsRepository')
    private specificationRepository: ISpecificationsRepository
  ) { }

  async execute(): Promise<Specification[]> {
    return this.specificationRepository.list()
  }
}

export { ListSpecificationUseCase }
