import * as Moment from 'moment';
import {UserPipe} from './user.pipe';
import {NewUserDTO} from './user.dto';
import {roomWire} from '../database/rage/room/room.wire';
import {userWire} from '../database/rage/user/user/user.wire';
import {Room, User, UserProfile} from 'instinct-rp-interfaces';
import {UserEntity} from '../database/rage/user/user/user.entity';
import {GoogleRecaptchaService} from '../google/recaptcha.service';
import {UserRepository} from '../database/rage/user/user/user.repository';
import {BadRequestException, Body, Controller, Get, Param, Post} from '@nestjs/common';
import {userRPStatsWire} from '../database/rage/user/user-rp-stats/user-rp-stats.wire';
import {UserRPStatsEntity} from '../database/rage/user/user-rp-stats/user-rp-stats.entity';
import {UserRPStatsRepository} from '../database/rage/user/user-rp-stats/user-rp-stats.repository';
import {BusinessPositionRepository} from '../database/rage/business/business-position/business-position.repository';
import {
  defaultUserCredits,
  defaultUserHomeRoom,
  defaultUserLook,
  defaultUserMotto,
  defaultUserPixels,
  defaultUserPoints,
  defaultUserRank,
} from '../common/config';
import {BusinessPositionEntity} from '../database/rage/business/business-position/business-position.entity';

@Controller('users')
export class UserController {
  constructor(
    private readonly userRepo: UserRepository,
    private readonly userRPStatsRepo: UserRPStatsRepository,
    private readonly recaptchaService: GoogleRecaptchaService,
    private readonly businessPositionRepo: BusinessPositionRepository
  ) {}

  @Post()
  async createUser(@Body() newUser: NewUserDTO): Promise<User> {
    const passedRecaptcha: boolean = await this.recaptchaService.passedVerification(newUser.recaptcha);

    if (!passedRecaptcha) {
      throw new BadRequestException('Our system detected suspicious behavior..');
    }

    const currentTimestamp: number = Moment().unix();
    const user: UserEntity = await this.userRepo.createAndReturn({
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
      online: '0',
      ipRegister: '127.0.0.1',
      ipCurrent: '127.0.0.1',
      homeRoom: defaultUserHomeRoom,
      youtube: '_5lUSTmkM_0',
      twoFactorAuthentication: 0,
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
    const user: UserEntity = await this.userRepo.findOneByUsernameOrFail(username);
    const stats: UserRPStatsEntity = await this.userRPStatsRepo.findOneByIDOrFail(user.id!);
    const businessPosition: BusinessPositionEntity = await this.businessPositionRepo.findOneByBusinessAndRankOrFail(stats.jobID, stats.jobRankID);
    return {
      user: userWire(user),
      stats: userRPStatsWire(stats, businessPosition),
    };
  }
}
