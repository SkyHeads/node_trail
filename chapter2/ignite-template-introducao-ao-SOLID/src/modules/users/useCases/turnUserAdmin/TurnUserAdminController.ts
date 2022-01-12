import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  // eslint-disable-next-line prettier/prettier
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) { }

  handle(request: Request, response: Response): Response {
    // Complete aqui
    const { user_id } = request.params;

    try {
      const findUser = this.turnUserAdminUseCase.execute({ user_id });

      return response.status(201).json(findUser);
    } catch (err) {
      return response.status(404).json({ error: err });
    }
  }
}

export { TurnUserAdminController };
