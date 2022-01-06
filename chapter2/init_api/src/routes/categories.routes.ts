import { Router } from 'express'

import { CategoriesRepository } from '../repositories/CategoriesRepository'

const categoriesRoutes = Router()

categoriesRoutes.post('/', (req, res) => {
  const { name, description } = req.body

  const categoriesRepository = new CategoriesRepository()

  const category = categoriesRepository.create({ name, description })

  return res.status(201).json(category)
})

export { categoriesRoutes }
