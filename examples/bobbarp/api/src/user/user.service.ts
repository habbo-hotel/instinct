import {Repository} from 'typeorm';
import * as Random from 'randomstring';
import {HashService} from '../common';
import {UserEntity} from '../database';
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';

@Injectable()
export class UserService {
  readonly eagerRelations: Array<string> = ['rank', 'job', 'job.job', 'job.job.business', 'job.job.business.user', 'job.job.business.room', 'gang', 'gang.owner'];

  constructor(
    private readonly hashService: HashService,

    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ) {}

  create(user: UserEntity): Promise<UserEntity> {
    return this.userRepository.save({
      ...user,
      password: this.hashService.generate(user.password),
    });
  }

  async createSSO(userID: number): Promise<string> {
    const authTicket: string = 'instinct_' + Random.generate(20) + '_' + userID;
    await this.userRepository.update(userID, {authTicket});
    return authTicket;
  }

  getByID(userID: number): Promise<UserEntity> {
    return this.userRepository.findOneOrFail({
      where: {
        id: userID,
      },
      relations: this.eagerRelations,
    });
  }

  getByUsername(username: string): Promise<UserEntity> {
    return this.userRepository.findOneOrFail({
      where: {
        username,
      },
      relations: this.eagerRelations,
    });
  }

  getByEmail(email: string): Promise<UserEntity> {
    return this.userRepository.findOneOrFail({
      where: {
        email,
      },
      relations: this.eagerRelations,
    });
  }
}
