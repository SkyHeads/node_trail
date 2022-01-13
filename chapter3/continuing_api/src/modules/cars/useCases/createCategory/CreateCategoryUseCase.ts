import { ICategoriesRepository } from '../../repositories/ICategoriesRepository'

interface IRequest {
  name: string
  description: string
}

class CreateCategoryUseCase {
  // eslint-disable-next-line prettier/prettier
  constructor(private categoriesRepository: ICategoriesRepository) { }

  async execute({ name, description }: IRequest): Promise<void> {
    const findCategoryIfExists = await this.categoriesRepository.findByName(
      name
    )

    if (findCategoryIfExists) {
      throw new Error('Category already exists.')
    }

    await this.categoriesRepository.create({ name, description })
  }
}

export { CreateCategoryUseCase }
