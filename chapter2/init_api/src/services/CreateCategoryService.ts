import { ICategoryRepository } from '../repositories/ICategoryRepository'

interface IRequest {
  name: string
  description: string
}

class CreateCategoryService {
  // eslint-disable-next-line prettier/prettier
  constructor(private categoriesRepository: ICategoryRepository) { }

  execute({ name, description }: IRequest): void {
    const findCategoryIfExists = this.categoriesRepository.findByName(name)

    if (findCategoryIfExists) {
      throw new Error('User already exists.')
    }

    this.categoriesRepository.create({ name, description })
  }
}

export { CreateCategoryService }
