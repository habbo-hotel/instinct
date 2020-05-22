import {HashService} from '../common';
import {InjectRepository} from '@nestjs/typeorm';
import {BearerTokenService} from './bearer-token.service';
import {UserEntity, UserRepository} from '../database/rage/user';
import {Injectable, UnauthorizedException} from '@nestjs/common';

@Injectable()
export class SessionService {
  constructor(
    @InjectRepository(UserRepository)
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
