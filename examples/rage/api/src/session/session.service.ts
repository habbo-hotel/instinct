import {HashService} from '../common/hash.service';
import {BearerTokenService} from './bearer-token.service';
import {Injectable, UnauthorizedException} from '@nestjs/common';
import {UserEntity} from '../database/rage/user/user/user.entity';
import {UserRepository} from '../database/rage/user/user/user.repository';

@Injectable()
export class SessionService {
  constructor(
    private readonly userRepo: UserRepository,
    private readonly hashService: HashService,
    private readonly bearerTokenService: BearerTokenService
  ) {}

  async loginWithCredentials(username: string, password: string): Promise<string> {
    const user: UserEntity = await this.userRepo.findOneByUsernameOrFail(username);
    const samePassword: boolean = await this.hashService.compare(password, user.password);

    if (!samePassword) {
      throw new UnauthorizedException('That is not the right password');
    }

    return this.bearerTokenService.signToken(user.id!);
  }
}
