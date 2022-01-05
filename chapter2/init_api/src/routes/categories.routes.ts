import { Router } from 'express'

const categoriesRoutes = Router()

const categories = []

categoriesRoutes.post('/', (req, res) => {
  const { name, description } = req.body

  const category = {
    name,
    description
  }

  categories.push(category)

  return res.status(201).json(categories)
})

export { categoriesRoutes }
