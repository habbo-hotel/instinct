import {GangRepository, gangWire} from '../database/gang';
import {Controller, Get, Delete, Patch, Post} from '@nestjs/common';

@Controller('gangs')
export class GangController {
  constructor(private readonly gangRepo: GangRepository) {}

  @Get()
  async getGangs() {
    const gangs = await this.gangRepo.find();
    return gangs.map(_ => gangWire(_));
  }
}
