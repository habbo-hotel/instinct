import * as Random from 'randomstring';
import {UserEntity} from './user.entity';
import {EntityRepository, Like, Repository} from 'typeorm';
import {HashService} from '../../../../common/hash.service';

@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {
  private readonly hashService: HashService;

  constructor() {
    super();
    this.hashService = new HashService();
  }

  async createAndReturn(user: UserEntity): Promise<UserEntity> {
    const newUser: UserEntity = await this.save({
      ...user,
      password: this.hashService.generate(user.password),
    });
    return this.findOneByIDOrFail(newUser.id!);
  }

  async authenticateClientByID(userID: number): Promise<string> {
    const authTicket: string = 'instinct_' + Random.generate(20) + '_' + userID;
    await this.update(userID, {authTicket});
    return authTicket;
  }

  readonly eagerRelations: string[] = [];

  findOneByIDOrFail(userID: number): Promise<UserEntity> {
    return this.findOneOrFail({
      where: {
        id: userID,
      },
      relations: this.eagerRelations,
    });
  }

  findOneByUsernameOrFail(username: string): Promise<UserEntity> {
    return this.findOneOrFail({
      where: {
        username,
      },
      relations: this.eagerRelations,
    });
  }

  findOneByEmailOrFail(email: string): Promise<UserEntity> {
    return this.findOneOrFail({
      where: {
        email,
      },
      relations: this.eagerRelations,
    });
  }

  searchByUsername(username: string): Promise<UserEntity[]> {
    return this.find({
      where: {
        username: Like(`%${username}%`),
      },
      relations: this.eagerRelations,
    });
  }
}
