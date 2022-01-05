import { Router } from 'express'
import { v4 as uuidV4 } from 'uuid'

const categoriesRoutes = Router()

const categories = []

categoriesRoutes.post('/', (req, res) => {
  const { name, description } = req.body

  const category = {
    id: uuidV4(),
    name,
    description,
    created_at: new Date()
  }

  categories.push(category)

  return res.status(201).json(categories)
})

export { categoriesRoutes }
