export default interface ICreateUserDTO {
  name: string;
  email: string;
  phone?: string;
  password?: string;
  admin?: boolean;
  secret?: string;
}
