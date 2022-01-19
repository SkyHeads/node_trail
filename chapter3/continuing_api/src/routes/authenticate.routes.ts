import { Router } from 'express'

import { AuthenticateController } from '../modules/accounts/useCases/authenticateUser/AuthenticateController'

const authenticateRouter = Router()

const authenticateController = new AuthenticateController()

authenticateRouter.post('/', authenticateController.handle)

export { authenticateRouter }
