import { CarsImagesRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsImagesRepositoryInMemory'
import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory'

import { CreateCarImagesUseCase } from './CreateCarImagesUseCase'

let carsImagesRepositoryInMemory: CarsImagesRepositoryInMemory
let createCarImagesUseCase: CreateCarImagesUseCase
let carsRepositoryInMemory: CarsRepositoryInMemory

describe('Create Car Images', () => {
  beforeEach(() => {
    carsImagesRepositoryInMemory = new CarsImagesRepositoryInMemory()
    carsRepositoryInMemory = new CarsRepositoryInMemory()
    createCarImagesUseCase = new CreateCarImagesUseCase(
      carsImagesRepositoryInMemory,
      carsRepositoryInMemory,
    )
  })

  it('should be able to create new images to existing car', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Name Car',
      description: 'Description Car',
      daily_rate: 100,
      license_plate: 'ABC-1234',
      fine_amount: 60,
      brand: 'Brand',
      category_id: 'category',
    })

    const images_name = ['img1.jpg', 'img2.jpg']

    await createCarImagesUseCase.execute({
      car_id: car.id,
      images_name,
    })
  })
})
