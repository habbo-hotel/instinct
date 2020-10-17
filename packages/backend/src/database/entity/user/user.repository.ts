import {Repository} from 'typeorm';
import {UserEntity} from './user.entity';
import {Injectable} from '@nestjs/common';
import {HashService} from '../../../common';
import {InjectRepository} from '@nestjs/typeorm';

@Injectable()
export class UserRepository {
  readonly eagerRelations: Array<keyof UserEntity> = [
    'rank',
    'joinedGroups',
    'badges',
    'rooms',
    'friends',
    'bans',
  ];

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

  getByID(userID: number): Promise<UserEntity> {
    return this.userRepository.findOneOrFail({
      where: {
        id: userID,
      },
      relations: this.eagerRelations,
    });
  }

  async updateByID(
    userID: number,
    changes: Partial<UserEntity>
  ): Promise<void> {
    await this.userRepository.update(userID, changes);
  }

  getByUsername(username: string): Promise<UserEntity | undefined> {
    return this.userRepository.findOne({
      where: {
        username,
      },
      relations: this.eagerRelations,
    });
  }

  getByEmail(email: string): Promise<UserEntity | undefined> {
    return this.userRepository.findOne({
      where: {
        email,
      },
      relations: this.eagerRelations,
    });
  }

  getByIPAddress(ipAddress: string): Promise<UserEntity[]> {
    return this.userRepository.find({
      where: {
        ipRegister: ipAddress,
      },
    });
  }

  getOnline(): Promise<UserEntity[]> {
    return this.userRepository.find({
      where: {
        online: 1,
      },
      relations: this.eagerRelations,
    });
  }
}
