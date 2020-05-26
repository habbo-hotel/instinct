import {NewSessionDTO} from './session.dto';
import {SessionService} from './session.service';
import {HasSession} from './has-session.decorator';
import {GetSession} from './get-session.decorator';
import {userWire} from '../database/rage/user/user/user.wire';
import {UserEntity} from '../database/rage/user/user/user.entity';
import {UserRepository} from '../database/rage/user/user/user.repository';
import {businessWire} from '../database/rage/business/business/business.wire';
import {BusinessEntity} from '../database/rage/business/business/business.entity';
import {Body, Controller, Get, NotFoundException, Param, Post} from '@nestjs/common';
import {userRPStatsWire} from '../database/rage/user/user-rp-stats/user-rp-stats.wire';
import {Business, BusinessJobApplication, User, UserStats} from 'instinct-rp-interfaces';
import {BusinessRepository} from '../database/rage/business/business/business.repository';
import {UserRPStatsEntity} from '../database/rage/user/user-rp-stats/user-rp-stats.entity';
import {UserRPStatsRepository} from '../database/rage/user/user-rp-stats/user-rp-stats.repository';
import {BusinessPositionEntity} from '../database/rage/business/business-position/business-position.entity';
import {BusinessPositionRepository} from '../database/rage/business/business-position/business-position.repository';
import {businessJobApplicationWire} from '../database/rage/business/business-job-application/business-job-application.wire';
import {BusinessJobApplicationEntity} from '../database/rage/business/business-job-application/business-job-application.entity';
import {BusinessJobApplicationRepository} from '../database/rage/business/business-job-application/business-job-application.repository';

@Controller('session')
export class SessionController {
  constructor(
    private readonly userRepo: UserRepository,
    private readonly sessionService: SessionService,
    private readonly businessRepo: BusinessRepository,
    private readonly userRPStatsRepo: UserRPStatsRepository,
    private readonly businessPositionRepo: BusinessPositionRepository,
    private businessJobApplicationRepo: BusinessJobApplicationRepository
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
