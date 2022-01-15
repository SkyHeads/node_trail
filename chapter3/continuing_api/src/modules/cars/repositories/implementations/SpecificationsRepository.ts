import { Specification } from '../../entities/Specification'
import {
  ICreateSpecificationsDTO,
  ISpecificationsRepository
} from '../ISpecificationsRepository'

class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[]

  private static INSTANCE: SpecificationsRepository

  public static getInstance(): SpecificationsRepository {
    if (!SpecificationsRepository.INSTANCE) {
      SpecificationsRepository.INSTANCE = new SpecificationsRepository()
    }

    return SpecificationsRepository.INSTANCE
  }

  constructor() {
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

export { SpecificationsRepository }
