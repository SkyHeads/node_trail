import { ICreateSpecificationsDTO } from '../dtos/ICreateSpecificationsDTO'
import { Specification } from '../entities/Specification'

interface ISpecificationsRepository {
  findByName(name: string): Promise<Specification>
  create({ name, description }: ICreateSpecificationsDTO): Promise<void>
  list(): Promise<Specification[]>
}

export { ISpecificationsRepository }
