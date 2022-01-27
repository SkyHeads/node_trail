import { AppError } from "../../../../errors/AppError"
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO"
import { UsersRepositoryInMemory } from "../../repositories/in-memory/UsersRepositoryInMemory"
import { CreateUserUseCase } from "../createUser/CreateUserUseCase"
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase"

let authenticateUserUseCase: AuthenticateUserUseCase
let usersRepositoryInMemory: UsersRepositoryInMemory
let createUserUseCase: CreateUserUseCase

describe('Authenticate User', () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory()
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory)
    authenticateUserUseCase = new AuthenticateUserUseCase(usersRepositoryInMemory)
  })

  it('should be able to authenticate user', async () => {
    const user: ICreateUserDTO = {
      driver_license: '1234567',
      email: 'test@test.com',
      password: '123456',
      name: 'test'
    }

    await createUserUseCase.execute(user)

    const result = await authenticateUserUseCase.execute({
      email: user.email,
      password: user.password
    })

    expect(result).toHaveProperty('token')
  })

  it('should not be able to authenticate if password is wrong', async () => {
    expect(async () => {
      const user: ICreateUserDTO = {
        driver_license: '1234567',
        email: 'test@test.com',
        password: '123456',
        name: 'test'
      }

      await createUserUseCase.execute(user)

      await authenticateUserUseCase.execute({
        email: user.email,
        password: 'wrong password'
      })
    }).rejects.toBeInstanceOf(AppError)
  })

  it('should not be able to authenticate an nonexistent user', async () => {
    expect(async () => {
      const user: ICreateUserDTO = {
        driver_license: '1234567',
        email: 'test@test.com',
        password: '123456',
        name: 'test'
      }

      await createUserUseCase.execute(user)

      await authenticateUserUseCase.execute({
        email: 'wrong email',
        password: user.password
      })
    }).rejects.toBeInstanceOf(AppError)
  })
})
