import { Update } from 'instinct-rp-interfaces';
import { Controller, Get } from '@nestjs/common';
import { updateWire } from '../database/instinct/update/update.wire';
import { UpdateEntity } from '../database/instinct/update/update.entity';
import { UpdateRepository } from '../database/instinct/update/update.repository';

@Controller('updates')
export class UpdateController {

  constructor(private readonly updateRepo: UpdateRepository) { }

  @Get()
  async getAll(): Promise<Update[]> {
    const updates: UpdateEntity[] = await this.updateRepo.getAll();
    return updates.map(update => updateWire(update));
  }

}

