import { ISpecificationsRepository } from '../repositories/ISpecificationsRepository'

interface IRequest {
  name: string
  description: string
}

class CreateSpecificationsService {
  // eslint-disable-next-line prettier/prettier
  constructor(private specificationsRepository: ISpecificationsRepository) { }

  execute({ name, description }: IRequest): void {
    const findSpecificationIfExists =
      this.specificationsRepository.findByName(name)

    if (findSpecificationIfExists) {
      throw new Error('Specification already exists.')
    }

    this.specificationsRepository.create({ name, description })
  }
}

export { CreateSpecificationsService }
