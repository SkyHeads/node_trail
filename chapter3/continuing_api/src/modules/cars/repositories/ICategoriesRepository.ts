import { Category } from '../entities/Category'
import { ICreateCategories } from './implementations/CategoriesRepository'

interface ICategoriesRepository {
  findByName(name: string): Category
  list(): Category[]
  create({ name, description }: ICreateCategories): Category
}

export { ICategoriesRepository }
