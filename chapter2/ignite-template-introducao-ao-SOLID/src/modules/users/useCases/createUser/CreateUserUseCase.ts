import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  // eslint-disable-next-line prettier/prettier
  constructor(private usersRepository: IUsersRepository) { }

  execute({ email, name }: IRequest): User {
    // Complete aqui
    const findUserIfExists = this.usersRepository.findByEmail(email);

    if (findUserIfExists) {
      throw new Error("User already exists");
    }

    const createUser = this.usersRepository.create({ email, name });

    return createUser;
  }
}

export { CreateUserUseCase };
