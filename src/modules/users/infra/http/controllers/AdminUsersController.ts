import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateAdminUserService from '@modules/users/services/CreateAdminUserService';
import { instanceToInstance } from 'class-transformer';

export default class AdminUsersController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { name, email, phone, password, admin_secret } = req.body;

    const createUserService = container.resolve(CreateAdminUserService);

    const user = await createUserService.execute({
      name,
      email,
      phone,
      password,
      admin_secret,
    });

    // Do not show user password
    // delete user.password;

    return res.json(instanceToInstance(user));
  }
}
