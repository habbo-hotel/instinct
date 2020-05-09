import * as Moment from 'moment';
import {UserPipe} from './user.pipe';
import {NewUserDTO} from './user.dto';
import {UserService} from './user.service';
import {Room, User, UserProfile} from 'instinct-rp-interfaces';
import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {badgeWire, businessWire, gangWire, roomWire, UserEntity, userWire} from '../database/entity';
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
      rooms: user.rooms!.map(room => roomWire(room)),
      badges: user.badges!.map(badge => badgeWire(badge)),
      friends: user.friends!.map(user => userWire(user)),
      businesses: user.businesses!.map(business => businessWire(business)),
      gangs: user.gangs!.map(gang => gangWire(gang)),
    };
  }
}
