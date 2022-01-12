import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  // eslint-disable-next-line prettier/prettier
  constructor(private createUserUseCase: CreateUserUseCase) { }

  handle(request: Request, response: Response): Response {
    // Complete aqui
    const { email, name } = request.body;

    try {
      const createdUser = this.createUserUseCase.execute({ email, name });

      return response.status(201).json(createdUser);
    } catch (err) {
      return response.status(400).json({ error: err });
    }
  }
}

export { CreateUserController };
