import express, { NextFunction, Request, Response } from 'express'
import 'express-async-errors';
import { MulterError } from 'multer';
import swaggerUi from 'swagger-ui-express'

import '@shared/infra/typeorm'

import '@shared/container'

import { AppError } from '@shared/errors/AppError'
import { router } from '@shared/infra/http/routes'

import swaggerFile from '../../../swagger.json'

const app = express()

app.use(express.json())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(router)

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, req: Request, res: Response, _: NextFunction): Response => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: `AppError: ${err.message}`
    })
  } else if (err instanceof MulterError) {
    return res.status(500).json({
      status: 'error',
      message: `MulterError: ${err.message}`
    })
  }

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error.'
  })
})

app.listen(3333, () => {
  console.log('Server Online On Port 3333 🚀')
})
