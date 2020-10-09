import {UserService} from '../user';
import {HashService} from '../common';
import {User} from 'instinct-interfaces';
import {SessionService} from './session.service';
import {HasSession} from './has-session.decorator';
import {GetSession} from './get-session.decorator';
import {BadRequestException, Body, Controller, Get, Post} from '@nestjs/common';
import {UserEntity, userWire} from '../database/entity/user';
import {NewSessionDTO, UpdateEmailDTO, UpdatePasswordDTO} from './session.dto';

@Controller('session')
export class SessionController {
  constructor(
    private readonly userService: UserService,
    private readonly sessionService: SessionService,
    private readonly hashService: HashService
  ) {}

  @Post()
  createSession(@Body() newSession: NewSessionDTO): Promise<string> {
    return this.sessionService.loginWithCredentials(newSession.username, newSession.password);
  }

  @Post('sso')
  @HasSession()
  async createSSO(@GetSession() session: UserEntity): Promise<string> {
    return this.userService.createSSO(session.id!);
  }

  @Post('settings')
  @HasSession()
  async changeSettings(@GetSession() session: UserEntity): Promise<string> {
    return 'Your settings have been updated';
  }

  @Post('settings/email')
  @HasSession()
  async changeEmail(@GetSession() session: UserEntity, @Body() emailDTO: UpdateEmailDTO): Promise<string> {
    const samePassword: boolean = await this.hashService.compare(emailDTO.password, session.password);

    if (!samePassword) {
      throw new BadRequestException('That is not the right password');
    }

    await this.userService.updateByID(session.id!, {
      email: emailDTO.email,
    });

    return 'Your email has been updated';
  }

  @Post('settings/password')
  @HasSession()
  async changePassword(@GetSession() session: UserEntity, @Body() passwordDTO: UpdatePasswordDTO): Promise<string> {
    const samePassword: boolean = await this.hashService.compare(passwordDTO.oldPassword, session.password);

    if (!samePassword) {
      throw new BadRequestException('That is not the right password');
    }

    if (passwordDTO.newPassword !== passwordDTO.newPasswordAgain) {
      throw new BadRequestException('Your passwords must match');
    }

    await this.userService.updateByID(session.id!, {
      password: this.hashService.generate(passwordDTO.newPassword),
    });

    return 'Your password has been updated';
  }

  @Get()
  @HasSession()
  getSession(@GetSession() session: UserEntity): User {
    return userWire(session);
  }
}
