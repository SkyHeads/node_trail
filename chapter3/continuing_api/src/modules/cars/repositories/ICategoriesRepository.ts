import { Category } from '../entities/Category'
import { ICreateCategories } from './implementations/CategoriesRepository'

interface ICategoriesRepository {
  findByName(name: string): Promise<Category>
  list(): Promise<Category[]>
  create({ name, description }: ICreateCategories): Promise<void>
}

export { ICategoriesRepository }
