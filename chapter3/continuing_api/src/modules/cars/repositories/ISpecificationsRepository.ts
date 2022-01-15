import { Specification } from '../entities/Specification'

export interface ICreateSpecificationsDTO {
  name: string
  description: string
}

interface ISpecificationsRepository {
  findByName(name: string): Promise<Specification>
  create({ name, description }: ICreateSpecificationsDTO): Promise<void>
  list(): Promise<Specification[]>
}

export { ISpecificationsRepository }
