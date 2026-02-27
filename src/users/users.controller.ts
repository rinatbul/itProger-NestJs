import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Put,
  Delete,
} from '@nestjs/common';

import { UsersService } from './users.service';
import { createUserDto } from './create-users.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  getAllUsers(): { id: number; name: string; bio: string }[] {
    return this.userService.getAllUsers();
  }

  //   @Get('about')
  //   getAllUsersAbout(): string {
  //     return 'All users About';
  //   }

  //   @Get('search')
  //   getUserSearch(
  //     @Query('name') name: string,
  //     @Query('age') age: string,
  //   ): string {
  //     return `User with name : ${name} and age : ${age}`;
  //   }

  //users/{id}
  @Get(':id')
  getUserById(@Param('id') id: string): {
    id: number;
    name: string;
    bio: string;
  } {
    return this.userService.getUserById(Number(id));
  }

  @Post()
  create(@Body() body: createUserDto) {
    return this.userService.createUser(body);
  }

  //   @Put(':id')
  //   update() {
  //     return 'update user';
  //   }

  //   @Delete(':id')
  //   delete() {
  //     return 'delete user';
  //   }
}
