import { Car } from '@modules/cars/infra/typeorm/entities/Car'
import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository'

interface IRequest {
  brand?: string
  category_id?: string
  name?: string
}

class ListAvailableCarsUseCase {
  constructor(private carsRepository: ICarsRepository) {}

  async execute({ name, brand, category_id }: IRequest): Promise<Car[]> {
    const car = await this.carsRepository.findAvailable(
      brand,
      category_id,
      name,
    )

    return car
  }
}

export { ListAvailableCarsUseCase }
