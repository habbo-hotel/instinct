import { UserEntity } from './user.entity';
import { EntityRepository, Like, Repository } from 'typeorm';

@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {

  readonly eagerRelations: string[] = [];

  findOneByUsernameOrFail(username: string): Promise<UserEntity> {
    return this.findOneOrFail({
      where: {
        username,
      },
      relations: this.eagerRelations,
    })
  }

  findOneByEmailOrFail(email: string): Promise<UserEntity> {
    return this.findOneOrFail({
      where: {
        email,
      },
      relations: this.eagerRelations,
    })
  }

  searchByUsername(username: string): Promise<UserEntity[]> {
    return this.find({
      where: {
        username: Like(`%${username}%`),
      },
      relations: this.eagerRelations,
    })
  }

}