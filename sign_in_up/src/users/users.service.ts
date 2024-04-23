/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */
// // user.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(user: User): Promise<User> {
    return this.userRepository.save(user);
  }

  async findByEmail(email: string): Promise<User> {
    return this.userRepository.findOne({ where: { email } });
  }

  async findByEmailAndPassword(email: string, password: string): Promise<User> {
    return this.userRepository.findOne({ where: { email, password } });
  }
}
