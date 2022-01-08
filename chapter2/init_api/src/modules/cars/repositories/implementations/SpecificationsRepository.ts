import { Specification } from '../../models/Specification'
import {
  ICreateSpecificationsDTO,
  ISpecificationsRepository
} from '../ISpecificationsRepository'

class SpecificationRepository implements ISpecificationsRepository {
  private specifications: Specification[]

  constructor() {
    this.specifications = []
  }

  create({ name, description }: ICreateSpecificationsDTO) {
    const specification = new Specification()

    Object.assign(specification, {
      name,
      description,
      created_at: new Date()
    })

    this.specifications.push(specification)
  }

  findByName(name: string): Specification {
    const specification = this.specifications.find(
      (specification) => specification.name === name
    )

    return specification
  }

  find(): Specification[] {
    return this.specifications
  }
}

export { SpecificationRepository }
