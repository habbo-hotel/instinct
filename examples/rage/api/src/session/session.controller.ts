import {User} from 'instinct-rp-interfaces';
import {NewSessionDTO} from './session.dto';
import {SessionService} from './session.service';
import {HasSession} from './has-session.decorator';
import {GetSession} from './get-session.decorator';
import {Body, Controller, Get, Post} from '@nestjs/common';
import {userWire} from '../database/rage/user/user/user.wire';
import {UserEntity} from '../database/rage/user/user/user.entity';
import {UserRepository} from '../database/rage/user/user/user.repository';

@Controller('session')
export class SessionController {
  constructor(private readonly userRepo: UserRepository, private readonly sessionService: SessionService) {}

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
}
