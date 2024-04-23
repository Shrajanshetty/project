/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req: any) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('myfortfolio')
  gethome() {
    return { message: 'Sample Portfolio' };
  }

  @UseGuards(JwtAuthGuard)
  @Get('mutualfund')
  getmutualfund() {
    return { info: 'Welcome to the Text converter' };
  }

  @UseGuards(JwtAuthGuard)
  @Get('blog')
  getblog() {
    return { data: '- Stay ahed of the curve with us' };
  }

  @UseGuards(JwtAuthGuard)
  @Get('api')
  getapi() {
    return { api: 'This is Api page' };
  }
}
