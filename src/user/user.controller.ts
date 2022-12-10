import { Controller, Get, Param, Req, UseGuards } from '@nestjs/common';
import { ParseIntPipe } from '@nestjs/common/pipes';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get('myAccount')
  getLoggedInUser(@Req() req: Request) {
    return req.user;
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findUser(id);
  }
}
