import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {UserSessionEntity} from './user-session.entity';

@Injectable()
export class UserSessionRepository {
  constructor(@InjectRepository(UserSessionEntity) private readonly userSessionRepo: Repository<UserSessionEntity>) { }

  readonly eagerRelations: string[] = ['user'];

  async create(session: UserSessionEntity): Promise<UserSessionEntity> {
    const newSession: UserSessionEntity = await this.userSessionRepo.save(session);

    return this.findOneByIDOrFail(newSession.id!);
  }

  findOneByIDOrFail(sessionID: number): Promise<UserSessionEntity> {
    return this.userSessionRepo.findOneOrFail({
      where: {
        id: sessionID,
      },
      relations: this.eagerRelations,
    });
  }

  async updateOneByIDOrFail(sessionID: number, changes: Partial<UserSessionEntity>): Promise<UserSessionEntity> {
    await this.userSessionRepo.update(sessionID, changes);
    return this.findOneByIDOrFail(sessionID);
  }

}