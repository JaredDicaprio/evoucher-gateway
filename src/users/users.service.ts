import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor() {
    // hard code users
    this.users = [
      {
        userId: 1,
        email: 'ichigo2297@gmail.com',
        password: '123',
        phoneNumber: '09799923443',
      },
      {
        userId: 2,
        email: 'chris@gmail.com',
        password: 'secret',
        phoneNumber: '09799923445',
      },
      {
        userId: 3,
        email: 'maria@gmail.com',
        password: 'guess',
        phoneNumber: '09799923447',
      },
    ];
  }

  async findOne(email: string): Promise<User | undefined> {
    return this.users.find(user => user.email === email);
  }
}
