import { Category } from '../models/Category'
import { ICreateCategories } from './CategoriesRepository'

interface ICategoriesRepository {
  findByName(name: string): Category
  list(): Category[]
  create({ name, description }: ICreateCategories): Category
}

export { ICategoriesRepository }
