import * as Random from 'randomstring';
import {UserEntity} from './user.entity';
import {EntityRepository, Like, Repository} from 'typeorm';

@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {
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
