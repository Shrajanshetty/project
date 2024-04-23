/* eslint-disable prettier/prettier */
// import { ConfigService } from '@nestjs/config';
import { DataSourceOptions } from 'typeorm';
import { User } from './users/users.entity';
import { Users1711449283931 } from './migration/1711449283931-users';

// const configService = new ConfigService();

const configuration: DataSourceOptions = {
  type: 'mysql',
  // host: configService.get('MYSQL_HOST'),
  // port: configService.get('MYSQL_PORT'),
  // username: configService.get('MYSQL_USER'),
  // password: configService.get('MYSQL_PASSWORD'),
  // database: configService.get('MYSQL_DB'),
  host:'localhost',
  port:3306,
  username:'root',
  password:'root',
  database:'tab',
  entities: [User],
  migrations: [Users1711449283931],
  synchronize: false,
  migrationsRun: true,
};

export default configuration;
