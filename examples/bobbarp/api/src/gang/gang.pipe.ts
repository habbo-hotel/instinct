import {GangEntity} from '../database';
import {GangService} from './gang.service';
import {PipeTransform, Injectable, NotFoundException} from '@nestjs/common';

@Injectable()
export class GangPipe implements PipeTransform {
  constructor(private readonly gangService: GangService) {}

  async transform(gangID: number): Promise<GangEntity> {
    try {
      return await this.gangService.getByID(gangID);
    } catch (e) {
      console.log(e);
      throw new NotFoundException('Gang does not exist');
    }
  }
}
