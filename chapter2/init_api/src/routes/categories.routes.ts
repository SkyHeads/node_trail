import { Router } from 'express'

import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository'
import { CreateCategoriesService } from '../modules/cars/services/CreateCategoriesService'

const categoriesRoutes = Router()
const categoriesRepository = new CategoriesRepository()
const createCategoryService = new CreateCategoriesService(categoriesRepository)

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
