import { Specification } from '../models/Specification'

export interface ICreateSpecificationsDTO {
  name: string
  description: string
}

interface ISpecificationsRepository {
  findByName(name: string): Specification
  create({ name, description }: ICreateSpecificationsDTO): void
  find(): Specification[]
}

export { ISpecificationsRepository }
