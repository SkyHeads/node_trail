import { ICreateCarsDTO } from '@modules/cars/dtos/ICreateCarsDTO'
import { Car } from '@modules/cars/infra/typeorm/entities/Car'

import { ICarsRepository } from '../ICarsRepository'

class CarsRepositoryInMemory implements ICarsRepository {
  private cars: Car[] = []

  async create(data: ICreateCarsDTO): Promise<Car> {
    const car = new Car()

    Object.assign(car, data)

    this.cars.push(car)

    return car
  }

  async findByLicensePlate(license_plate: string): Promise<Car> {
    const car = this.cars.find(car => car.license_plate === license_plate)

    return car
  }
}

export { CarsRepositoryInMemory }
