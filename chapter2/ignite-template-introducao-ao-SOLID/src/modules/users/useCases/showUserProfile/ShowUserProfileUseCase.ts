import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  // eslint-disable-next-line prettier/prettier
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User {
    // Complete aqui
    const findUserIfExists = this.usersRepository.findById(user_id);

    if (!findUserIfExists) {
      throw new Error("User dont found");
    }

    return findUserIfExists;
  }
}

export { ShowUserProfileUseCase };
