import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Exclude } from 'class-transformer';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  @Exclude()
  password: string;

  @Column()
  admin: boolean;

  @Column()
  secret: string;

  @Column('timestamp with time zone')
  lastLogin_at: Date;

  // @Column('timestamp with time zone')
  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default User;
