import { ICreateSpecificationsDTO } from '@modules/cars/dtos/ICreateSpecificationsDTO'
import { Specification } from '@modules/cars/infra/typeorm/entities/Specification'

import { ISpecificationsRepository } from '../ISpecificationsRepository'

class SpecificationsRepositoryInMemory implements ISpecificationsRepository {
  private specifications: Specification[] = []

  async findByName(name: string): Promise<Specification> {
    const specification = this.specifications.find(
      specification => specification.name === name,
    )

    return specification
  }

  async create({
    name,
    description,
  }: ICreateSpecificationsDTO): Promise<Specification> {
    const specification = new Specification()

    Object.assign(specification, {
      name,
      description,
    })

    this.specifications.push(specification)

    return specification
  }

  async list(): Promise<Specification[]> {
    return this.specifications
  }

  async findByIds(ids: string[]): Promise<Specification[]> {
    const allSpecifications = this.specifications.filter(specification =>
      ids.includes(specification.id),
    )

    return allSpecifications
  }
}

export { SpecificationsRepositoryInMemory }
