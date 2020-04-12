import * as Moment from 'moment';
import { UserPipe } from './user.pipe';
import { NewUserDTO } from './user.dto';
import { UserService } from './user.service';
import { User } from 'fashionkilla-interfaces';
import { UserEntity, userWire } from '../database/entity';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import {
  defaultUserCredits,
  defaultUserHomeRoom,
  defaultUserLook,
  defaultUserMotto,
  defaultUserPixels,
  defaultUserPoints,
  defaultUserRank,
} from '../config';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() newUser: NewUserDTO): Promise<User> {
    const currentTimestamp: number = Moment().unix();
    const user: UserEntity = await this.userService.create({
      username: newUser.username,
      motto: defaultUserMotto,
      password: newUser.password,
      rankID: defaultUserRank,
      email: newUser.email,
      mailVerified: 0,
      accountCreated: currentTimestamp,
      accountDayOfBirth: 0,
      lastLogin: currentTimestamp,
      lastOnline: currentTimestamp,
      gender: 'M',
      figure: defaultUserLook,
      credits: defaultUserCredits,
      pixels: defaultUserPixels,
      points: defaultUserPoints,
      online: 0,
      ipRegister: '127.0.0.1',
      ipCurrent: '127.0.0.1',
      homeRoom: defaultUserHomeRoom,
    });
    return userWire(user);
  }

  @Get(':userID')
  getUserByID(@Param('userID', UserPipe) user: UserEntity): User {
    return userWire(user);
  }

  @Get('profile/:username')
  async getUserByUsername(@Param('username') username: string): Promise<User> {
    const user: UserEntity = await this.userService.getByUsername(username);
    return userWire(user);
  }
}
