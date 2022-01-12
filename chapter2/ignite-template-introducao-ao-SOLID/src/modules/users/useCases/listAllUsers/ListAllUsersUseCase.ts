import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  // eslint-disable-next-line prettier/prettier
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User[] {
    // Complete aqui
    const findIfUserExists = this.usersRepository.findById(user_id);

    if (!findIfUserExists) {
      throw new Error("User dont found");
    }

    const checkIfUserAdmin = findIfUserExists.admin === true;

    if (checkIfUserAdmin) {
      return this.usersRepository.list();
    }
    throw new Error("User is not admin");
  }
}

export { ListAllUsersUseCase };
