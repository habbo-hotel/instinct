import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ConfigEntity } from '../database/entity/config';

@Injectable()
export class ConfigService {

  constructor(@InjectRepository(ConfigEntity) private readonly configRepo: Repository<ConfigEntity>) { }

  getConfig(): Promise<ConfigEntity> {
    return this.configRepo.findOneOrFail();
  }

}