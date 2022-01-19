import { ICreateCategoriesDTO } from '../dtos/ICreateCategoriesDTO'
import { Category } from '../entities/Category'

interface ICategoriesRepository {
  findByName(name: string): Promise<Category>
  list(): Promise<Category[]>
  create({ name, description }: ICreateCategoriesDTO): Promise<void>
}

export { ICategoriesRepository }
