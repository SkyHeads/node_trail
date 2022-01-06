import { Router } from 'express'

import { CategoriesRepository } from '../repositories/CategoriesRepository'
import { CreateCategoryService } from '../services/CreateCategoryService'

const categoriesRoutes = Router()
const categoriesRepository = new CategoriesRepository()
const createCategoryService = new CreateCategoryService(categoriesRepository)

categoriesRoutes.post('/', (req, res) => {
  const { name, description } = req.body

  const category = createCategoryService.execute({ name, description })

  return res.status(201).json(category)
})

categoriesRoutes.get('/', (req, res) => {
  const categories = categoriesRepository.list()

  return res.status(200).json(categories)
})

export { categoriesRoutes }
