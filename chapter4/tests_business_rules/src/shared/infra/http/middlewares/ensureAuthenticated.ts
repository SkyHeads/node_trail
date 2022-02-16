import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { UsersRepository } from "@modules/accounts/infra/typeorm/repositories/UsersRepository";

import { AppError } from "../../../errors/AppError";

interface IPayload {
  sub: string
}

export async function ensureAuthenticated(req: Request, res: Response, next: NextFunction): Promise<void> {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    throw new AppError('JWT is missing.', 401)
  }

  const [, token] = authHeader.split(' ')

  try {
    const { sub: user_id } = verify(token, '634dbcdcec995f2a01edce3dc03badb8') as IPayload

    const usersRepository = new UsersRepository()

    const checkIfUserExists = await usersRepository.findById(user_id)

    if (!checkIfUserExists) {
      throw new AppError('User does not exists!.', 401)
    }

    req.user = {
      id: user_id
    }

    return next();
  } catch (err) {
    throw new AppError(`JWT token is invalid, Message: ${err}.`, 401)
  }
}
