import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken';
import { inject, injectable } from "tsyringe";

import { AppError } from '../../../../errors/AppError';
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  email: string
  password: string
}

interface IResponse {
  user: {
    name: string;
    email: string;
  }
  token: string
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) { }

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email)

    if (!user) {
      throw new AppError('Email or Password Incorrect.', 401)
    }

    const checkPassword = await compare(password, user.password)

    if (!checkPassword) {
      throw new AppError('Email or Password Incorrect.', 401)
    }

    const token = sign({}, "634dbcdcec995f2a01edce3dc03badb8", {
      subject: String(user.id),
      expiresIn: '1d'
    })

    delete user.created_at
    delete user.updated_at
    delete user.password
    delete user.isAdmin
    delete user.id

    return {
      user,
      token
    }
  }
}

export { AuthenticateUserUseCase }
