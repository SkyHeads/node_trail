import { Category } from '../../models/Category'
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository'

interface IRequest {
  name: string
  description: string
}

class CreateCategoryUseCase {
  // eslint-disable-next-line prettier/prettier
  constructor(private categoriesRepository: ICategoriesRepository) { }

  execute({ name, description }: IRequest): Category {
    const findCategoryIfExists = this.categoriesRepository.findByName(name)

    if (findCategoryIfExists) {
      throw new Error('Category already exists.')
    }

    const category = this.categoriesRepository.create({ name, description })

    return category
  }
}

export { CreateCategoryUseCase }
