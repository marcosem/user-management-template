import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import AppError from '@shared/errors/AppError';
import authConfig from '@config/auth';

import { container } from 'tsyringe';
import GetUserService from '@modules/users/services/GetUserService';

interface ITokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

// Validate JWT token
export default async function ensureAdminAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new AppError('JWT token is missing', 401);
  }

  // Take out Bearer
  const [, token] = authHeader.split(' ');
  // const usersRepository = getCustomRepository(UsersRepository);
  const getUsers = container.resolve(GetUserService);

  try {
    const decoded = verify(token || '', authConfig.jwt.secret);

    const { sub } = decoded as ITokenPayload;
    const user = await getUsers.execute({ user_id: sub });
    const isAdmin = user ? user.admin : false;

    if (!isAdmin) {
      throw new AppError('User does not have admnin permissions', 401);
    }

    // Redefinition of express.Request on @types, adding .user
    req.user = {
      id: sub,
    };

    return next();
  } catch {
    throw new AppError('Invalid JWT token', 401);
  }
}
