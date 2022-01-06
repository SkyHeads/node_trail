import { Router } from 'express'

import { CategoriesRepository } from '../repositories/CategoriesRepository'

const categoriesRoutes = Router()
const categoriesRepository = new CategoriesRepository()

categoriesRoutes.post('/', (req, res) => {
  const { name, description } = req.body

  const findCategoryIfExists = categoriesRepository.findByName(name)

  if (findCategoryIfExists) {
    return res.status(400).json({ error: 'User already exists.' })
  }

  const category = categoriesRepository.create({ name, description })

  return res.status(201).json(category)
})

categoriesRoutes.get('/', (req, res) => {
  const categories = categoriesRepository.list()

  return res.status(200).json(categories)
})

export { categoriesRoutes }
