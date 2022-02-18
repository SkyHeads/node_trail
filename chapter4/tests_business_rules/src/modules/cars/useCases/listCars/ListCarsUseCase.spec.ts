import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory'

import { ListCarsUseCase } from './ListCarsUseCase'

let listCarsUseCase: ListCarsUseCase
let carsRepositoryInMemory: CarsRepositoryInMemory

describe('List Cars', () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory()
    listCarsUseCase = new ListCarsUseCase(carsRepositoryInMemory)
  })

  it('should be able to list all available cars', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Car1',
      brand: 'brand test',
      category_id: 'b8a9e198-ae6c-4c5a-ad4b-a5d3d5838fae',
      daily_rate: 200,
      description: 'description test',
      fine_amount: 100,
      license_plate: 'FQQ-8896',
    })

    const cars = await listCarsUseCase.execute({})

    expect(cars).toEqual([car])
  })

  it('should be able to list all available cars by brand', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Car1',
      brand: 'brand test',
      category_id: 'b8a9e198-ae6c-4c5a-ad4b-a5d3d5838fae',
      daily_rate: 200,
      description: 'description test',
      fine_amount: 100,
      license_plate: 'FQQ-8896',
    })

    const cars = await listCarsUseCase.execute({
      brand: 'brand test',
    })

    expect(cars).toEqual([car])
  })

  it('should be able to list all available cars by category_id', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Car1',
      brand: 'brand test',
      category_id: 'b8a9e198-ae6c-4c5a-ad4b-a5d3d5838fae',
      daily_rate: 200,
      description: 'description test',
      fine_amount: 100,
      license_plate: 'FQQ-8896',
    })

    const cars = await listCarsUseCase.execute({
      category_id: 'b8a9e198-ae6c-4c5a-ad4b-a5d3d5838fae',
    })

    expect(cars).toEqual([car])
  })

  it('should be able to list all available cars by name', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Car1',
      brand: 'brand test',
      category_id: 'b8a9e198-ae6c-4c5a-ad4b-a5d3d5838fae',
      daily_rate: 200,
      description: 'description test',
      fine_amount: 100,
      license_plate: 'FQQ-8896',
    })

    const cars = await listCarsUseCase.execute({
      name: 'Car1',
    })

    expect(cars).toEqual([car])
  })
})
