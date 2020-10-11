import * as Moment from 'moment';
import {UserPipe} from './user.pipe';
import {UserDTOClass} from './user.dto';
import {UserService} from './user.service';
import {maxAccountsPerIP} from '../config/environment';
import {Room, User, UserProfile} from 'instinct-interfaces';
import {badgeWire, groupWire, roomWire, UserEntity, userWire} from '../database/entity';
import {Body, Controller, ForbiddenException, Get, Ip, NotFoundException, Param, Post} from '@nestjs/common';
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

  @Get('online')
  async getOnlineUsers(): Promise<User[]> {
    const onlineUsers = await this.userService.getOnline();
    return onlineUsers.map(_ => userWire(_));
  }

  @Post()
  async createUser(@Body() newUser: UserDTOClass, @Ip() ipAddress: string): Promise<User> {
    const alreadyRegistered = await this.userService.getByIPAddress(ipAddress);

    if (alreadyRegistered.length >= maxAccountsPerIP) {
      throw new ForbiddenException('Too many accounts');
    }

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
      ipRegister: ipAddress,
      ipCurrent: ipAddress,
      homeRoom: defaultUserHomeRoom,
      favoriteYoutubeVideo: 'GfxcnX7XWfg',
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
    const user: UserEntity | undefined = await this.userService.getByUsername(username);

    if (!user) {
      throw new NotFoundException('User does not exist');
    }

    return {
      user: userWire(user),
      rooms: user.rooms!.map(room => roomWire(room)),
      badges: user.badges!.map(badge => badgeWire(badge)),
      friends: user.friends!.map(user => userWire(user)),
      groups: user.joinedGroups!.map(group => groupWire(group)),
    };
  }
}
