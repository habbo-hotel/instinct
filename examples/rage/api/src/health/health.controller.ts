import {Health} from 'instinct-rp-interfaces';
import {Controller, Get} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {ServerStatusEntity, ServerStatusRepository} from '../database/rage/server-status';

@Controller('health')
export class HealthController {
  constructor(@InjectRepository(ServerStatusRepository) private readonly serverStatusRepo: ServerStatusRepository) {}

  @Get()
  async getHealth(): Promise<Health> {
    const serverStatus: ServerStatusEntity = await this.serverStatusRepo.getServerStatus();
    return {
      usersOnline: serverStatus.usersOnline,
      roomsActive: serverStatus.roomsLoaded,
      systemVersion: '0.1.0 Alpha',
    };
  }
}
