import { ICreateCategoriesDTO } from '../../dtos/ICreateCategoriesDTO'
import { Category } from '../../infra/typeorm/entities/Category'
import { ICategoriesRepository } from '../ICategoriesRepository'

class CategoriesRepositoryInMemory implements ICategoriesRepository {
  private categories: Category[] = []

  public async findByName(name: string): Promise<Category> {
    const category = this.categories.find(category => category.name === name)
    return category
  }

  public async list(): Promise<Category[]> {
    const all = this.categories
    return all
  }

  public async create({
    name,
    description,
  }: ICreateCategoriesDTO): Promise<void> {
    const category = new Category()

    Object.assign(category, {
      name,
      description,
    })

    this.categories.push(category)
  }
}

export { CategoriesRepositoryInMemory }
