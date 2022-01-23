import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateUserAvatarUseCase } from "./UpdateUserAvatarUseCase";

class UpdateUserAvatarController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.user

    // RECEBER ARQUIVO
    const { filename } = req.file

    const updateUserAvatarUseCase = container.resolve(UpdateUserAvatarUseCase)

    await updateUserAvatarUseCase.execute({
      user_id: id,
      avatar_file: filename
    })

    return res.status(204).json()
  }
}

export { UpdateUserAvatarController }
