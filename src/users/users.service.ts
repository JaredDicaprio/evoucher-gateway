import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor() {
    // hard coded users
    this.users = [
      {
        userId: 1,
        email: 'user123@gmail.com',
        password: '123',
        phoneNumber: '09799923443',
      },
      {
        userId: 2,
        email: 'user456@gmail.com',
        password: '456',
        phoneNumber: '09799923445',
      },
      {
        userId: 3,
        email: 'user789@gmail.com',
        password: '789',
        phoneNumber: '09799923447',
      },
    ];
  }

  async findOne(email: string): Promise<User | undefined> {
    return this.users.find(user => user.email === email);
  }
}
