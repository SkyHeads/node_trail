import { getRepository, Repository } from 'typeorm'

import { ICarsImagesRepository } from '@modules/cars/repositories/ICarsImagesRepository'

import { CarImage } from '../entities/CarImage'

class CarsImagesRepository implements ICarsImagesRepository {
  private repository: Repository<CarImage>

  constructor() {
    this.repository = getRepository(CarImage)
  }

  async list(): Promise<CarImage[]> {
    const cars = await this.repository.find()

    return cars
  }

  async create(car_id: string, image_name: string): Promise<CarImage> {
    const carImage = this.repository.create({
      car_id,
      image_name,
    })

    await this.repository.save(carImage)

    return carImage
  }
}

export { CarsImagesRepository }
