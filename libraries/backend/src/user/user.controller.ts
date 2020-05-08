import * as Moment from 'moment';
import {UserPipe} from './user.pipe';
import {NewUserDTO} from './user.dto';
import {ConfigService} from '../config';
import {UserService} from './user.service';
import {Room, User, UserProfile} from 'instinct-interfaces';
import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {badgeWire, groupWire, roomWire, UserEntity, userWire} from '../database/entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService, private readonly configService: ConfigService) {}

  @Post()
  async createUser(@Body() newUser: NewUserDTO): Promise<User> {
    const currentTimestamp: number = Moment().unix();
    const user: UserEntity = await this.userService.create({
      username: newUser.username,
      motto: this.configService.get('defaultUserMotto'),
      password: newUser.password,
      rankID: this.configService.get('defaultUserRank'),
      email: newUser.email,
      mailVerified: 0,
      accountCreated: currentTimestamp,
      accountDayOfBirth: 0,
      lastLogin: currentTimestamp,
      lastOnline: currentTimestamp,
      gender: 'M',
      figure: this.configService.get('defaultUserLook'),
      credits: this.configService.get('defaultUserCredits'),
      pixels: this.configService.get('defaultUserPixels'),
      points: this.configService.get('defaultUserPoints'),
      online: 0,
      ipRegister: '127.0.0.1',
      ipCurrent: '127.0.0.1',
      homeRoom: this.configService.get('defaultUserHomeRoom'),
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
      groups: user.joinedGroups!.map(group => groupWire(group)),
    };
  }
}
