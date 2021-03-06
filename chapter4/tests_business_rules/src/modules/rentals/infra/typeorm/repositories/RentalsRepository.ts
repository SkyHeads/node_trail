import { getRepository, Repository } from 'typeorm'

import { ICreateRentalDTO } from '@modules/rentals/dtos/ICreateRentalDTO'
import { IRentalsRepository } from '@modules/rentals/repositories/IRentalsRepository'

import { Rental } from '../entities/Rental'

class RentalsRepository implements IRentalsRepository {
  private repository: Repository<Rental>

  constructor() {
    this.repository = getRepository(Rental)
  }

  async findOpenRentalByCar(car_id: string): Promise<Rental> {
    const openedByCar = await this.repository.findOne({
      where: { car_id, end_date: null },
    })
    return openedByCar
  }

  async findOpenRentalByUser(user_id: string): Promise<Rental> {
    const openedByUser = await this.repository.findOne({
      where: {
        user_id,
        end_date: null,
      },
    })
    return openedByUser
  }

  async create({
    car_id,
    expected_return_date,
    user_id,
  }: ICreateRentalDTO): Promise<Rental> {
    const rental = this.repository.create({
      car_id,
      expected_return_date,
      user_id,
    })

    await this.repository.save(rental)

    return rental
  }
}

export { RentalsRepository }
