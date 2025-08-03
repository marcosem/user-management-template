import User from '@modules/users/infra/typeorm/entities/User';
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';

export default interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<User>;
  update(data: User): Promise<User>;
  findById(user_id: string): Promise<User | null>;
  findBySecret(secret: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  listAll(): Promise<User[]>;
  delete(user_id: string): Promise<void>;
}
