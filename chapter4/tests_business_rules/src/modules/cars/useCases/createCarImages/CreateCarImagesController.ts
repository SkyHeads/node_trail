import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { CreateCarImagesUseCase } from './CreateCarImagesUseCase'

interface IFiles {
  filename: string
}

class CreateCarImagesController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    const images = req.files as IFiles[]

    const fileNames = images.map(file => file.filename)

    const createCarImagesUseCase = container.resolve(CreateCarImagesUseCase)

    await createCarImagesUseCase.execute({
      car_id: id,
      images_name: fileNames,
    })

    return res.status(201).json()
  }
}

export { CreateCarImagesController }
