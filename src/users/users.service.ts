import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './create-users.dto';

@Injectable()
export class UsersService {
  private users = [
    { id: 1, name: 'Rin', bio: 'Some bio text' },
    { id: 2, name: 'Bul', bio: 'Some bio text' },
  ];

  getAllUsers(): { id: number; name: string; bio: string }[] {
    return this.users;
  }

  getUserById(id: number) {
    const user = this.users.find((u) => u.id === id);
    if (!user) throw new NotFoundException('User with id not found');
    return user;
  }

  createUser(body: CreateUserDto) {
    const newUser = {
      id: this.users.length + 1,
      name,
    };
    this.users.push(newUser);
    return newUser;
  }
}
