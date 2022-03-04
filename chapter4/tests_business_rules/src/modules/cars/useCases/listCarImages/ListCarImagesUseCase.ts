import { inject, injectable } from 'tsyringe'

import { CarImage } from '@modules/cars/infra/typeorm/entities/CarImage'
import { ICarsImagesRepository } from '@modules/cars/repositories/ICarsImagesRepository'

@injectable()
class ListCarImagesUseCase {
  constructor(
    @inject('CarsImagesRepository')
    private carsImagesRepository: ICarsImagesRepository,
  ) {}

  async execute(): Promise<CarImage[]> {
    const cars = await this.carsImagesRepository.list()

    return cars
  }
}

export { ListCarImagesUseCase }
