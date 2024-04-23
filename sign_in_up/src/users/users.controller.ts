/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Post,
  // UnauthorizedException,
  ConflictException,
  // BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { User } from './users.entity';
import { UserService } from './users.service';


@Controller('users')
export class UserController {
  constructor(
    private readonly userService: UserService,
  ) {}

  @Post('signup')
  async signUp(
    @Body() user: User,
  ): Promise<{ message: string; token?: string }> {
    try {
      // Check if the email already exists
      const existingUser = await this.userService.findByEmail(user.email);
      if (existingUser) {
        throw new ConflictException('Email already exists');
      }

      // Create the user if the email is unique
      await this.userService.create(user);
      return { message: 'User registered successfully!' };
    } catch (error) {
      if (error instanceof ConflictException) {
        throw new ConflictException('This email address is already in use.');
      } else {
        throw new InternalServerErrorException('Error registering user');
      }
    }
  }

}



