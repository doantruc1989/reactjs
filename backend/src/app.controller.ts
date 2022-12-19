import { Controller, Request, Post, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  constructor(private authService: AuthService,
    private appService: AppService
  ) { }

  @Get()
  getHello(@Request() req) {
    return this.appService.getHello();
  }
}