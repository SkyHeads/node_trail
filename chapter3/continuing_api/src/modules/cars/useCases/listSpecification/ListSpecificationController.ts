import { Request, Response } from 'express'

import { ListSpecificationUseCase } from './ListSpecificationUseCase'

class ListSpecificationController {
  // eslint-disable-next-line prettier/prettier
  constructor(private listSpecificationUseCase: ListSpecificationUseCase) { }

  // eslint-disable-next-line prettier/prettier
  handle(req: Request, res: Response): Response {
    const listAllSpecification = this.listSpecificationUseCase.execute()

    return res.status(200).json(listAllSpecification)
  }
}

export { ListSpecificationController }
