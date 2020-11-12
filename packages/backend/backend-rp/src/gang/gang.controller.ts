import {Gang} from '@instinct-prj/interface-rp';
import {GangRepository, gangWire} from '../database/gang';
import {Controller, Get, Param, NotFoundException} from '@nestjs/common';

@Controller('gangs')
export class GangController {
  constructor(private readonly gangRepo: GangRepository) {}

  @Get()
  async getGangs(): Promise<Gang[]> {
    const gangs = await this.gangRepo.find();
    return gangs.map(_ => gangWire(_));
  }

  @Get(':gangID')
  async getGangByID(@Param('gangID') gangID: number): Promise<Gang> {
    const gang = await this.gangRepo.findOne({id: gangID});

    if (!gang) {
      throw new NotFoundException();
    }

    return gangWire(gang);
  }
}
