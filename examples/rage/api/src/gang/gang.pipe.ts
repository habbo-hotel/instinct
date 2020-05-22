import {InjectRepository} from '@nestjs/typeorm';
import {GangEntity} from '../database/rage/gang/gang/gang.entity';
import {GangRepository} from '../database/rage/gang/gang/gang.repository';
import {PipeTransform, Injectable, NotFoundException} from '@nestjs/common';

@Injectable()
export class GangPipe implements PipeTransform {
  constructor(@InjectRepository(GangRepository) private readonly gangRepo: GangRepository) {}

  async transform(gangID: number): Promise<GangEntity> {
    try {
      return await this.gangRepo.findOneByIDOrFail(gangID);
    } catch (e) {
      console.log(e);
      throw new NotFoundException('Gang does not exist');
    }
  }
}
