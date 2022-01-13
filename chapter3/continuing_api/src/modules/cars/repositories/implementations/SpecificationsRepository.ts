import { Specification } from '../../entities/Specification'
import {
  ICreateSpecificationsDTO,
  ISpecificationsRepository
} from '../ISpecificationsRepository'

class SpecificationRepository implements ISpecificationsRepository {
  private specifications: Specification[]

  private static INSTANCE: SpecificationRepository

  public static getInstance(): SpecificationRepository {
    if (!SpecificationRepository.INSTANCE) {
      SpecificationRepository.INSTANCE = new SpecificationRepository()
    }

    return SpecificationRepository.INSTANCE
  }

  private constructor() {
    this.specifications = []
  }

  create({ name, description }: ICreateSpecificationsDTO): Specification {
    const specification = new Specification()

    Object.assign(specification, {
      name,
      description,
      created_at: new Date()
    })

    this.specifications.push(specification)

    return specification
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
