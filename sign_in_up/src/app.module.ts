/* eslint-disable prettier/prettier */

import { TypeOrmModule } from '@nestjs/typeorm';
import configuration from './configuration';
import { UsersModule } from './users/users.module';
import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [UsersModule,TypeOrmModule.forRoot(configuration), AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule  {}

