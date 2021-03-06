import { CarImage } from '@modules/cars/infra/typeorm/entities/CarImage'

import { ICarsImagesRepository } from '../ICarsImagesRepository'

class CarsImagesRepositoryInMemory implements ICarsImagesRepository {
  private cars: CarImage[] = []

  async create(car_id: string, image_name: string): Promise<CarImage> {
    const carImage = new CarImage()

    Object.assign(carImage, {
      car_id,
      image_name,
    })

    this.cars.push(carImage)

    return carImage
  }

  async list(): Promise<CarImage[]> {
    return this.cars
  }
}

export { CarsImagesRepositoryInMemory }
