import { Router } from 'express'

import { ensureAuthenticated } from '@shared/infra/http/middlewares/ensureAuthenticated'

import { authenticateRouter } from './authenticate.routes'
import { carRouter } from './cars.routes'
import { categoriesRoutes } from './categories.routes'
import { specificationsRouter } from './specifications.routes'
import { usersRoutes } from './users.routes'

const router = Router()

router.use('/categories', ensureAuthenticated, categoriesRoutes)
router.use('/specifications', ensureAuthenticated, specificationsRouter)
router.use('/users', usersRoutes)
router.use('/sessions', authenticateRouter)
router.use('/cars', ensureAuthenticated, carRouter)

export { router }
