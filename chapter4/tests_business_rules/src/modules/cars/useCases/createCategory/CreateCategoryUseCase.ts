import { inject, injectable } from 'tsyringe'

import { ICategoriesRepository } from '@modules/cars/repositories/ICategoriesRepository'
import { AppError } from '@shared/errors/AppError'

interface IRequest {
  name: string
  description: string
}

@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository
  ) { }

  async execute({ name, description }: IRequest): Promise<void> {
    const findCategoryIfExists = await this.categoriesRepository.findByName(name)

    if (findCategoryIfExists) {
      throw new AppError('Category already exists.', 403)
    }

    await this.categoriesRepository.create({ name, description })
  }
}

export { CreateCategoryUseCase }
