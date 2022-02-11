import { inject, injectable } from 'tsyringe'

import { AppError } from '@errors/AppError'
import { ISpecificationsRepository } from '@modules/cars/repositories/ISpecificationsRepository'

interface IRequest {
  name: string
  description: string
}

@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject('SpecificationsRepository')
    private specificationsRepository: ISpecificationsRepository
  ) { }

  async execute({ name, description }: IRequest): Promise<void> {
    const findSpecificationIfExists = await this.specificationsRepository.findByName(name)

    if (findSpecificationIfExists) {
      throw new AppError('Specification already exists.', 403)
    }

    await this.specificationsRepository.create({
      name,
      description
    })
  }
}

export { CreateSpecificationUseCase }
