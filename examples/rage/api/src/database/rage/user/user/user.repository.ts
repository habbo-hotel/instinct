import * as Random from 'randomstring';
import {UserEntity} from './user.entity';
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {HashService} from '../../../../common/hash.service';
import {Like, Repository, SelectQueryBuilder} from 'typeorm';
import {UserRPStatsEntity} from '../user-rp-stats/user-rp-stats.entity';

@Injectable()
export class UserRepository {
  readonly eagerRelations: string[] = [];

  constructor(
    private readonly hashService: HashService,
    @InjectRepository(UserEntity) private readonly userRepo: Repository<UserEntity>,
    @InjectRepository(UserRPStatsEntity) private readonly userRPStatsRepository: Repository<UserRPStatsEntity>
  ) {}

  async createAndReturn(user: UserEntity): Promise<UserEntity> {
    const newUser: UserEntity = await this.userRepo.save({
      ...user,
      password: this.hashService.generate(user.password),
    });

    await this.userRPStatsRepository.save({userID: newUser.id!});

    return this.findOneByIDOrFail(newUser.id!);
  }

  async authenticateClientByID(userID: number): Promise<string> {
    const authTicket: string = 'instinct_' + Random.generate(20) + '_' + userID;
    await this.userRepo.update(userID, {authTicket});
    return authTicket;
  }

  findOneByIDOrFail(userID: number): Promise<UserEntity> {
    return this.userRepo.findOneOrFail({
      where: {
        id: userID,
      },
      relations: this.eagerRelations,
    });
  }

  findOneByUsernameOrFail(username: string): Promise<UserEntity> {
    return this.userRepo.findOneOrFail({
      where: {
        username,
      },
      relations: this.eagerRelations,
    });
  }

  findOneByEmailOrFail(email: string): Promise<UserEntity> {
    return this.userRepo.findOneOrFail({
      where: {
        email,
      },
      relations: this.eagerRelations,
    });
  }

  searchByUsername(username: string): Promise<UserEntity[]> {
    return this.userRepo.find({
      where: {
        username: Like(`%${username}%`),
      },
      relations: this.eagerRelations,
    });
  }

  async updateByIDOrFail(userID: number, changes: Partial<UserEntity>): Promise<UserEntity> {
    await this.findOneByIDOrFail(userID);
    return this.userRepo.save({
      id: userID,
      ...changes,
    })
  }

  async checkPasswordByID(hashedPassword: string, unHashedPassword: string): Promise<boolean> {
    const samePassword: boolean = await this.hashService.compare(unHashedPassword, hashedPassword);
    return samePassword;
  }

  getQueryBuilder(): SelectQueryBuilder<UserEntity> {
    return this.userRepo.createQueryBuilder('user');
  }
}
