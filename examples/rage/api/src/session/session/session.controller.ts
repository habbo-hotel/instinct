import {SessionService} from './session.service';
import {BackendUserSession} from './session.type';
import {HasSession} from './has-session.decorator';
import {GetSession} from './get-session.decorator';
import {HashService} from '../../common/hash.service';
import {UserEntity} from '../../database/rage/user/user/user.entity';
import {UserRepository} from '../../database/rage/user/user/user.repository';
import {businessWire} from '../../database/rage/business/business/business.wire';
import {BusinessEntity} from '../../database/rage/business/business/business.entity';
import {userSessionWire} from '../../database/rage/user/user-session/user-session.wire';
import {randomStringGenerator} from '@nestjs/common/utils/random-string-generator.util';
import {userRPStatsWire} from '../../database/rage/user/user-rp-stats/user-rp-stats.wire';
import {BusinessRepository} from '../../database/rage/business/business/business.repository';
import {UserRPStatsEntity} from '../../database/rage/user/user-rp-stats/user-rp-stats.entity';
import {Business, BusinessJobApplication, UserSession, UserStats} from 'instinct-rp-interfaces';
import {NewSessionDTO, UpdateEmailDTO, UpdateProfileDTO, UpdateSecurityDTO} from './session.dto';
import {UserRPStatsRepository} from '../../database/rage/user/user-rp-stats/user-rp-stats.repository';
import {BusinessPositionEntity} from '../../database/rage/business/business-position/business-position.entity';
import {BusinessPositionRepository} from '../../database/rage/business/business-position/business-position.repository';
import {businessJobApplicationWire} from '../../database/rage/business/business-job-application/business-job-application.wire';
import {BusinessJobApplicationEntity} from '../../database/rage/business/business-job-application/business-job-application.entity';
import {BadRequestException, Body, Controller, Get, NotFoundException, Param, Patch, Post, UnauthorizedException} from '@nestjs/common';
import {BusinessJobApplicationRepository} from '../../database/rage/business/business-job-application/business-job-application.repository';

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
  getSession(@GetSession() session: BackendUserSession): UserSession {
    return userSessionWire(session);
  }


  @Patch('settings/email')
  @HasSession()
  async updateEmailSettings(@GetSession() { user }: BackendUserSession, @Body() emailDTO: UpdateEmailDTO): Promise<string> {
    const samePassword: boolean = await this.userRepo.checkPasswordByID(user.password, emailDTO.password);

    if (!samePassword) {
      throw new UnauthorizedException('You can not change your email at this time due to invalid password');
    }

    await this.userRepo.updateByIDOrFail(user.id!, {email: emailDTO.email});
    return 'Your email has been updated';
  }

  @Patch('settings/profile')
  @HasSession()
  async updateProfileSettings(@GetSession() { user }: BackendUserSession, @Body() profileDTO: UpdateProfileDTO): Promise<string> {
    await this.userRepo.updateByIDOrFail(user.id!, {youtube: profileDTO.youtube});
    return 'Your profile has been updated';
  }

  @Patch('settings/password')
  @HasSession()
  async updateSecuritySettings(@GetSession() { user }: BackendUserSession, @Body() securityDTO: UpdateSecurityDTO): Promise<string> {
    const samePassword: boolean = await this.userRepo.checkPasswordByID(user.password, securityDTO.oldPassword);

    if (!samePassword) {
      throw new UnauthorizedException('You can not change your password at this because your password was wrong');
    }

    if (securityDTO.newPassword !== securityDTO.newPasswordAgain) {
      throw new BadRequestException('Your passwords must match');
    }

    const hashedPassword: string = this.hashService.generate(securityDTO.newPassword);
    await this.userRepo.updateByIDOrFail(user.id!, {password: hashedPassword});
    return 'Your password has been updated';
  }

  @Patch('settings/two_factor')
  @HasSession()
  async updateTwoFactorSettings(@GetSession() { user }: BackendUserSession): Promise<string> {
    const twoFactorSecret: string = randomStringGenerator() + '_' + user.id!;

    await this.userRepo.updateByIDOrFail(user.id!, { twoFactorSecret: twoFactorSecret });

    return 'Your two factor settings have been updated';
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
