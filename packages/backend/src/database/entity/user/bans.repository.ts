import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {UserBanEntity} from './bans.entity';
import {InjectRepository} from '@nestjs/typeorm';

@Injectable()
export class UserBanRepository {
  constructor(
    @InjectRepository(UserBanEntity)
    private readonly userBanRepo: Repository<UserBanEntity>
  ) {}

  private readonly eagerRelations: Array<keyof UserBanEntity> = [
    'user',
    'staffMember',
  ];

  getAll(): Promise<UserBanEntity[]> {
    return this.userBanRepo.find({
      relations: this.eagerRelations,
    });
  }

  getOneByID(banID: number): Promise<UserBanEntity> {
    return this.userBanRepo.findOneOrFail({
      where: {
        id: banID,
      },
      relations: this.eagerRelations,
    });
  }

  async create(
    userID: number,
    ipAddress: string,
    machineID: string,
    staffMemberID: number,
    banStart: number,
    banExpiration: number
  ): Promise<UserBanEntity> {
    const newBan = await this.userBanRepo.save({
      userID,
      ipAddress,
      machineID,
      staffID: staffMemberID,
      banStartedTimestamp: banStart,
      banExpirationTimestamp: banExpiration,
    });

    return this.getOneByID(newBan.id!);
  }

  async updateByID(
    banID: number,
    changes: Partial<UserBanEntity>
  ): Promise<void> {
    await this.userBanRepo.update(banID, changes);
  }

  async deleteByID(banID: number): Promise<void> {
    await this.userBanRepo.delete(banID);
  }
}
