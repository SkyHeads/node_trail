import { Specification } from '../entities/Specification'

export interface ICreateSpecificationsDTO {
  name: string
  description: string
}

interface ISpecificationsRepository {
  findByName(name: string): Specification
  create({ name, description }: ICreateSpecificationsDTO): Specification
  find(): Specification[]
}

export { ISpecificationsRepository }
