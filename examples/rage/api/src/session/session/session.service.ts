import {HashService} from '../../common/hash.service';
import {Injectable, UnauthorizedException} from '@nestjs/common';
import {UserEntity} from '../../database/rage/user/user/user.entity';
import {BearerTokenService} from '../bearer-token/bearer-token.service';
import {UserRepository} from '../../database/rage/user/user/user.repository';
import {UserSessionEntity} from '../../database/rage/user/user-session/user-session.entity';
import {UserSessionRepository} from '../../database/rage/user/user-session/user-session.repository';

@Injectable()
export class SessionService {
  constructor(
    private readonly userRepo: UserRepository,
    private readonly hashService: HashService,
    private readonly bearerTokenService: BearerTokenService,
    private readonly userSessionRepo: UserSessionRepository,
  ) {}

  async loginWithCredentials(username: string, password: string): Promise<string> {
    const user: UserEntity | undefined = await this.userRepo.findOneByUsername(username);

    if (user === undefined) {
      throw new UnauthorizedException({
        type: 'auth',
        data: 'invalid_username',
      });
    }

    const samePassword: boolean = await this.hashService.compare(password, user.password);

    if (!samePassword) {
      throw new UnauthorizedException({
        type: 'auth',
        data: 'invalid_password',
      });
    }

    const session: UserSessionEntity = await this.userSessionRepo.create({
      userID: user.id!,
      ipAddress: 'NOT_IMPLEMENTED',
      country: 'NOT_IMPLEMENTED',
      operatingSystem: 'NOT_IMPLEMENTED',
      authorized: user.twoFactorSecret ? 0 : 1,
    })

    return this.bearerTokenService.signToken(session.id!);
  }
}
