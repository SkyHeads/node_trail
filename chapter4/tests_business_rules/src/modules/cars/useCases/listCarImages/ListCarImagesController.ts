import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { ListCarImagesUseCase } from './ListCarImagesUseCase'

class ListCarImagesController {
  async handle(req: Request, res: Response): Promise<Response> {
    const listCarImagesUseCase = container.resolve(ListCarImagesUseCase)

    const cars = await listCarImagesUseCase.execute()

    cars.filter(car => {
      if (car) {
        delete car.created_at && delete car.updated_at && delete car.id
      }
    })

    return res.status(200).json(cars)
  }
}

export { ListCarImagesController }
