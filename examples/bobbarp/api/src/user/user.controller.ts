import * as Moment from 'moment';
import {UserPipe} from './user.pipe';
import {NewUserDTO} from './user.dto';
import {UserService} from './user.service';
import { GoogleRecaptchaService } from '../google';
import {Room, User, UserProfile} from 'instinct-rp-interfaces';
import { BadRequestException, Body, Controller, Get, Param, Post } from '@nestjs/common';
import {roomWire, UserEntity, userWire} from '../database/entity';
import {
  defaultUserCredits,
  defaultUserHomeRoom,
  defaultUserLook,
  defaultUserMotto,
  defaultUserPixels,
  defaultUserPoints,
  defaultUserRank,
} from '../common';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService, private readonly recaptchaService: GoogleRecaptchaService) {}

  @Post()
  async createUser(@Body() newUser: NewUserDTO): Promise<User> {

    const passedRecaptcha: boolean = await this.recaptchaService.passedVerification(newUser.recaptcha);

    if (!passedRecaptcha) {
      throw new BadRequestException('Our system detected suspicious behavior..')
    }

    const currentTimestamp: number = Moment().unix();
    const user: UserEntity = await this.userService.create({
      username: newUser.username,
      motto: defaultUserMotto,
      password: newUser.password,
      rankID: defaultUserRank,
      email: newUser.email,
      accountCreated: currentTimestamp,
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

  @Get(':userID/rooms')
  async getRoomsByUserID(@Param('userID', UserPipe) user: UserEntity): Promise<Room[]> {
    return user.rooms!.map(room => roomWire(room));
  }

  @Get('profile/:username')
  async getUserByUsername(@Param('username') username: string): Promise<UserProfile> {
    const user: UserEntity = await this.userService.getByUsername(username);
    return {
      user: userWire(user),
    };
  }
}
