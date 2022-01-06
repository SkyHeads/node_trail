import { ICategoriesRepository } from '../repositories/ICategoriesRepository'

interface IRequest {
  name: string
  description: string
}

class CreateCategoriesService {
  // eslint-disable-next-line prettier/prettier
  constructor(private categoriesRepository: ICategoriesRepository) { }

  execute({ name, description }: IRequest): void {
    const findCategoryIfExists = this.categoriesRepository.findByName(name)

    if (findCategoryIfExists) {
      throw new Error('Category already exists.')
    }

    this.categoriesRepository.create({ name, description })
  }
}

export { CreateCategoriesService }
