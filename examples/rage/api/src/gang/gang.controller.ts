import {GangPipe} from './gang.pipe';
import {GangService} from './gang.service';
import {SearchGangDTO} from './gang.types';
import {Gang} from 'instinct-rp-interfaces';
import {GangEntity, gangWire} from '../database/entity/gang';
import {Body, Controller, Get, Param, Post} from '@nestjs/common';

@Controller('gangs')
export class GangController {
  constructor(private readonly gangService: GangService) {}

  @Get()
  async getAll(): Promise<Gang[]> {
    const gangs: GangEntity[] = await this.gangService.getAll();
    return gangs.map(gang => gangWire(gang));
  }

  @Get('top')
  async getTopGangs(): Promise<Gang[]> {
    const gangs: GangEntity[] = await this.gangService.getTop();
    return gangs.map(gang => gangWire(gang));
  }

  @Get(':gangID')
  getByID(@Param('gangID', GangPipe) gang: GangEntity): Gang {
    return gangWire(gang);
  }

  @Post('search')
  async searchGangs(@Body() searchDTO: SearchGangDTO): Promise<Gang[]> {
    const gangs: GangEntity[] = await this.gangService.searchByField('name', searchDTO.name);
    return gangs.map(gang => gangWire(gang));
  }
}
