import { Request, Response } from 'express'

import { ListCategoriesUseCase } from './ListCategoriesUseCase'

class ListCategoriesController {
  // eslint-disable-next-line prettier/prettier
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) { }

  handle(req: Request, res: Response): Response {
    const listAllCategories = this.listCategoriesUseCase.execute()

    return res.status(200).json(listAllCategories)
  }
}

export { ListCategoriesController }
