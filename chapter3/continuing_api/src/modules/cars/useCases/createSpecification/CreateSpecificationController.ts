import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { CreateSpecificationUseCase } from './CreateSpecificationUseCase'

class CreateSpecificationController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, description } = req.body

    const createSpecificationUseCase = container.resolve(CreateSpecificationUseCase)

    const specification = await createSpecificationUseCase.execute({
      name,
      description
    })

    return res.status(201).json(specification)
  }
}

export { CreateSpecificationController }
