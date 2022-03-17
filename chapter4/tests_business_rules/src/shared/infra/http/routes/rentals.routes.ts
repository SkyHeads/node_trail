import { Router } from 'express'

import { CreateRentalController } from '@modules/rentals/useCases/createRental/CreateRentalController'

const rentalsRouter = Router()

const createRentalController = new CreateRentalController()

rentalsRouter.post('/', createRentalController.handle)

export { rentalsRouter }
