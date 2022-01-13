import { Specification } from '../../entities/Specification'
import { ISpecificationsRepository } from '../../repositories/ISpecificationsRepository'

interface IRequest {
  name: string
  description: string
}

class CreateSpecificationUseCase {
  // eslint-disable-next-line prettier/prettier
  constructor(private specificationsRepository: ISpecificationsRepository) { }

  execute({ name, description }: IRequest): Specification {
    const findSpecificationIfExists =
      this.specificationsRepository.findByName(name)

    if (findSpecificationIfExists) {
      throw new Error('Specification already exists.')
    }

    const specification = this.specificationsRepository.create({
      name,
      description
    })

    return specification
  }
}

export { CreateSpecificationUseCase }
