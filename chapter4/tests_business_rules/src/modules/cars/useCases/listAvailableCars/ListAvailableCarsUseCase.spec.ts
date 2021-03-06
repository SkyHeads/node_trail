import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory'

import { ListAvailableCarsUseCase } from './ListAvailableCarsUseCase'

let listAvailableCarsUseCase: ListAvailableCarsUseCase
let carsRepositoryInMemory: CarsRepositoryInMemory

describe('List Cars', () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory()
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(
      carsRepositoryInMemory,
    )
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

    const cars = await listAvailableCarsUseCase.execute({})

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

    const cars = await listAvailableCarsUseCase.execute({
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

    const cars = await listAvailableCarsUseCase.execute({
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

    const cars = await listAvailableCarsUseCase.execute({
      name: 'Car1',
    })

    expect(cars).toEqual([car])
  })
})
