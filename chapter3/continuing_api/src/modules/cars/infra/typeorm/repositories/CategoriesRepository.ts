import { getRepository, Repository } from 'typeorm'

import { ICreateCategoriesDTO } from '@modules/cars/dtos/ICreateCategoriesDTO'
import { ICategoriesRepository } from '@modules/cars/repositories/ICategoriesRepository'

import { Category } from '../entities/Category'



class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>

  constructor() {
    this.repository = getRepository(Category)
  }

  async create({ name, description }: ICreateCategoriesDTO): Promise<void> {
    const category = this.repository.create({ name, description })

    await this.repository.save(category)
  }

  async list(): Promise<Category[]> {
    const categories = await this.repository.find()

    return categories
  }

  async findByName(name: string): Promise<Category> {
    const category = await this.repository.findOne({ name })
    return category
  }
}

export { CategoriesRepository }