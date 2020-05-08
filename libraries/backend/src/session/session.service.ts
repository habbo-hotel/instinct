import {UserService} from '../user';
import {HashService} from '../common';
import {UserEntity} from '../database/entity/user';
import {BearerTokenService} from './bearer-token.service';
import {Injectable, UnauthorizedException} from '@nestjs/common';

@Injectable()
export class SessionService {
  constructor(
    private readonly userService: UserService,
    private readonly hashService: HashService,
    private readonly bearerTokenService: BearerTokenService
  ) {}

  async loginWithCredentials(username: string, password: string): Promise<string> {
    const user: UserEntity = await this.userService.getByUsername(username);
    const samePassword: boolean = await this.hashService.compare(password, user.password);

    if (!samePassword) {
      throw new UnauthorizedException('That is not the right password');
    }

    return this.bearerTokenService.signToken(user.id!);
  }
}
