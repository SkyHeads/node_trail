import { Category } from '../models/Category'
import { ICreateCategoryDTO } from './CategoriesRepository'

interface ICategoryRepository {
  findByName(name: string): Category
  list(): Category[]
  create({ name, description }: ICreateCategoryDTO): void
}

export { ICategoryRepository }
