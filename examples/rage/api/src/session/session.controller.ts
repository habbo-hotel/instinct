import {NewSessionDTO} from './session.dto';
import {SessionService} from './session.service';
import {HasSession} from './has-session.decorator';
import {GetSession} from './get-session.decorator';
import {Body, Controller, Get, Post} from '@nestjs/common';
import {userWire} from '../database/rage/user/user/user.wire';
import {UserEntity} from '../database/rage/user/user/user.entity';
import {UserRepository} from '../database/rage/user/user/user.repository';
import { businessWire } from '../database/rage/business/business/business.wire';
import { Business, BusinessJobApplication, User } from 'instinct-rp-interfaces';
import { BusinessEntity } from '../database/rage/business/business/business.entity';
import { BusinessRepository } from '../database/rage/business/business/business.repository';
import { businessJobApplicationWire } from '../database/rage/business/business-job-application/business-job-application.wire';
import { BusinessJobApplicationEntity } from '../database/rage/business/business-job-application/business-job-application.entity';
import { BusinessJobApplicationRepository } from '../database/rage/business/business-job-application/business-job-application.repository';

@Controller('session')
export class SessionController {
  constructor(
    private readonly userRepo: UserRepository,
    private readonly sessionService: SessionService,
    private readonly businessRepo: BusinessRepository,
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

}
