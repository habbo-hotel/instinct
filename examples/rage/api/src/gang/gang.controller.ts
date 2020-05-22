import {GangPipe} from './gang.pipe';
import {SearchGangDTO} from './gang.types';
import {Gang} from 'instinct-rp-interfaces';
import {InjectRepository} from '@nestjs/typeorm';
import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {GangEntity, GangRepository, gangWire} from '../database/rage/gang/gang';

@Controller('gangs')
export class GangController {
  constructor(@InjectRepository(GangRepository) private readonly gangRepo: GangRepository) {}

  @Get()
  async getAll(): Promise<Gang[]> {
    const gangs: GangEntity[] = await this.gangRepo.getAll();
    return gangs.map(gang => gangWire(gang));
  }

  @Get('top/kills')
  async getTopKills(): Promise<Gang[]> {
    const gangs: GangEntity[] = await this.gangRepo.getMostKills();
    return gangs.map(gang => gangWire(gang));
  }

  @Get('top/deaths')
  async getTopDeaths(): Promise<Gang[]> {
    const gangs: GangEntity[] = await this.gangRepo.getMostDeaths();
    return gangs.map(gang => gangWire(gang));
  }

  @Get(':gangID')
  getByID(@Param('gangID', GangPipe) gang: GangEntity): Gang {
    return gangWire(gang);
  }

  @Post('search')
  async searchGangs(@Body() searchDTO: SearchGangDTO): Promise<Gang[]> {
    const gangs: GangEntity[] = await this.gangRepo.searchByField('name', searchDTO.name);
    return gangs.map(gang => gangWire(gang));
  }
}
