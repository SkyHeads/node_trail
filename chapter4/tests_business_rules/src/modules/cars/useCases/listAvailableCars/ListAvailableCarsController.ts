import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { ListAvailableCarsUseCase } from './ListAvailableCarsUseCase'

class ListAvailableCarsController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, category_id, brand } = req.query

    const listAvailableCarsUseCase = container.resolve(ListAvailableCarsUseCase)

    const cars = await listAvailableCarsUseCase.execute({
      brand: brand as string,
      name: name as string,
      category_id: category_id as string,
    })

    return res.status(200).json(cars)
  }
}

export { ListAvailableCarsController }
