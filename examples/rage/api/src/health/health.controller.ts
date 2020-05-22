import {Controller, Get} from '@nestjs/common';
import {Health} from 'instinct-rp-interfaces';
import {ServerStatusService} from './server-status.service';
import {ServerStatusEntity} from '../database/entity/server-status';

@Controller('health')
export class HealthController {
  constructor(private readonly serverStatus: ServerStatusService) {}

  @Get()
  async getHealth(): Promise<Health> {
    const serverStatus: ServerStatusEntity = await this.serverStatus.getServerStatus();
    return {
      usersOnline: serverStatus.usersOnline,
      roomsActive: serverStatus.roomsLoaded,
      systemVersion: '0.1.0 Alpha',
    };
  }
}
