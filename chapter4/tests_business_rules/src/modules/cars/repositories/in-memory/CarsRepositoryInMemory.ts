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

  async findById(id: string): Promise<Car> {
    const car = this.cars.find(car => car.id === id)

    return car
  }

  async findByLicensePlate(license_plate: string): Promise<Car> {
    const car = this.cars.find(car => car.license_plate === license_plate)

    return car
  }

  async findAvailable(
    brand?: string,
    category_id?: string,
    name?: string,
  ): Promise<Car[]> {
    const all = this.cars.filter(car => {
      if (
        car.available === true ||
        (brand && car.brand === brand) ||
        (category_id && car.category_id === category_id) ||
        (name && car.name === name)
      ) {
        return car
      }
      return null
    })

    // const all = this.cars.filter(
    //   car =>
    //     car.available === true ||
    //     (brand && car.brand === brand) ||
    //     (category_id && car.category_id === category_id) ||
    //     (name && car.name === name),
    // )

    // console.log(all)

    return all
  }
}

export { CarsRepositoryInMemory }
