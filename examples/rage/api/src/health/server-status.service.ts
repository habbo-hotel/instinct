import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {ServerStatusEntity} from '../database/entity/server-status';

@Injectable()
export class ServerStatusService {
  constructor(@InjectRepository(ServerStatusEntity) private readonly serverStatusRepo: Repository<ServerStatusEntity>) {}

  getServerStatus(): Promise<ServerStatusEntity> {
    return this.serverStatusRepo.findOneOrFail();
  }
}
