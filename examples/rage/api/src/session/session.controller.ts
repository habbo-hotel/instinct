import {SessionService} from './session.service';
import {HasSession} from './has-session.decorator';
import {GetSession} from './get-session.decorator';
import {HashService} from '../common/hash.service';
import {userWire} from '../database/rage/user/user/user.wire';
import {UserEntity} from '../database/rage/user/user/user.entity';
import {UserRepository} from '../database/rage/user/user/user.repository';
import {businessWire} from '../database/rage/business/business/business.wire';
import {BusinessEntity} from '../database/rage/business/business/business.entity';
import {userRPStatsWire} from '../database/rage/user/user-rp-stats/user-rp-stats.wire';
import {Business, BusinessJobApplication, User, UserStats} from 'instinct-rp-interfaces';
import {BusinessRepository} from '../database/rage/business/business/business.repository';
import {UserRPStatsEntity} from '../database/rage/user/user-rp-stats/user-rp-stats.entity';
import {UserRPStatsRepository} from '../database/rage/user/user-rp-stats/user-rp-stats.repository';
import {NewSessionDTO, UpdateEmailDTO, UpdateProfileDTO, UpdateSecurityDTO} from './session.dto';
import {BusinessPositionEntity} from '../database/rage/business/business-position/business-position.entity';
import {BusinessPositionRepository} from '../database/rage/business/business-position/business-position.repository';
import {businessJobApplicationWire} from '../database/rage/business/business-job-application/business-job-application.wire';
import {BusinessJobApplicationEntity} from '../database/rage/business/business-job-application/business-job-application.entity';
import {BusinessJobApplicationRepository} from '../database/rage/business/business-job-application/business-job-application.repository';
import {BadRequestException, Body, Controller, Get, NotFoundException, Param, Patch, Post, UnauthorizedException} from '@nestjs/common';

@Controller('session')
export class SessionController {
  constructor(
    private readonly hashService: HashService,
    private readonly userRepo: UserRepository,
    private readonly sessionService: SessionService,
    private readonly businessRepo: BusinessRepository,
    private readonly userRPStatsRepo: UserRPStatsRepository,
    private readonly businessPositionRepo: BusinessPositionRepository,
    private businessJobApplicationRepo: BusinessJobApplicationRepository,
  ) {}

  @Post()
  createSession(@Body() newSession: NewSessionDTO): Promise<string> {
    return this.sessionService.loginWithCredentials(newSession.username, newSession.password);
  }

  @Post('sso')
  @HasSession()
  async createSSO(@GetSession() session: UserEntity): Promise<string> {
    return this.userRepo.authenticateClientByID(session.id!);
  }

  @Get()
  @HasSession()
  getSession(@GetSession() session: UserEntity): User {
    return userWire(session);
  }

  @Patch('settings/email')
  @HasSession()
  async updateEmailSettings(@GetSession() session: UserEntity, @Body() emailDTO: UpdateEmailDTO): Promise<string> {
    const samePassword: boolean = await this.userRepo.checkPasswordByID(session.password, emailDTO.password);

    if (!samePassword) {
      throw new UnauthorizedException('You can not change your email at this time due to invalid password');
    }

    await this.userRepo.updateByIDOrFail(session.id!, {email: emailDTO.email});
    return 'Your email has been updated';
  }

  @Patch('settings/profile')
  @HasSession()
  async updateProfileSettings(@GetSession() session: UserEntity, @Body() profileDTO: UpdateProfileDTO): Promise<string> {
    await this.userRepo.updateByIDOrFail(session.id!, {youtube: profileDTO.youtube});
    return 'Your profile has been updated';
  }

  @Patch('settings/password')
  @HasSession()
  async updateSecuritySettings(@GetSession() session: UserEntity, @Body() securityDTO: UpdateSecurityDTO): Promise<string> {
    const samePassword: boolean = await this.userRepo.checkPasswordByID(session.password, securityDTO.oldPassword);

    if (!samePassword) {
      throw new UnauthorizedException('You can not change your password at this because your password was wrong');
    }

    if (securityDTO.newPassword !== securityDTO.newPasswordAgain) {
      throw new BadRequestException('Your passwords must match');
    }

    const hashedPassword: string = this.hashService.generate(securityDTO.newPassword);
    await this.userRepo.updateByIDOrFail(session.id!, {password: hashedPassword});
    return 'Your password has been updated';
  }

  @Get('stats')
  @HasSession()
  async getMyStats(@GetSession() session: UserEntity): Promise<UserStats> {
    const rpStats: UserRPStatsEntity = await this.userRPStatsRepo.findOneByIDOrFail(session.id!);
    const businessPosition: BusinessPositionEntity = await this.businessPositionRepo.findOneByBusinessAndRankOrFail(rpStats.jobID, rpStats.jobRankID);
    return userRPStatsWire(rpStats, businessPosition);
  }

  @Get('businesses')
  @HasSession()
  async getMyBusinesses(@GetSession() session: UserEntity): Promise<Business[]> {
    const businesses: BusinessEntity[] = await this.businessRepo.getForUser(session.id!);
    return businesses.map(business => businessWire(business));
  }

  @Get('applications')
  @HasSession()
  async getMyApplications(@GetSession() session: UserEntity): Promise<BusinessJobApplication[]> {
    const applications: BusinessJobApplicationEntity[] = await this.businessJobApplicationRepo.getAllForUser(session.id!);
    return applications.map(application => businessJobApplicationWire(application));
  }

  @Get('applications/:applicationID')
  @HasSession()
  async getApplicationByID(@Param('applicationID') applicationID: number, @GetSession() session: UserEntity): Promise<BusinessJobApplication> {
    try {
      const application: BusinessJobApplicationEntity = await this.businessJobApplicationRepo.findOneByIDAndUserOrFail(applicationID, session.id!);
      return businessJobApplicationWire(application);
    } catch {
      throw new NotFoundException();
    }
  }
}
