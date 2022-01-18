import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string
  password: string
  email: string
  driver_license: string
}

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) { }

  async execute({ name, password, email, driver_license }: IRequest): Promise<void> {
    const data = {
      name,
      password,
      email,
      driver_license
    }

    await this.usersRepository.create(data)
  }
}

export { CreateUserUseCase }
