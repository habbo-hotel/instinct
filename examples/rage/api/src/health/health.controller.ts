import {Health} from 'instinct-rp-interfaces';
import {Controller, Get} from '@nestjs/common';
import {ServerStatusEntity} from '../database/rage/server-status/server-status.entity';
import {ServerStatusRepository} from '../database/rage/server-status/server-status.repository';

@Controller('health')
export class HealthController {
  constructor(private readonly serverStatusRepo: ServerStatusRepository) {}

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
