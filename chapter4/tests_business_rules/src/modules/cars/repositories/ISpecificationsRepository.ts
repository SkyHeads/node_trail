import { ICreateSpecificationsDTO } from '../dtos/ICreateSpecificationsDTO'
import { Specification } from '../infra/typeorm/entities/Specification'

interface ISpecificationsRepository {
  findByName(name: string): Promise<Specification>
  create({
    name,
    description,
  }: ICreateSpecificationsDTO): Promise<Specification>
  list(): Promise<Specification[]>
  findByIds(ids: string[]): Promise<Specification[]>
}

export { ISpecificationsRepository }
