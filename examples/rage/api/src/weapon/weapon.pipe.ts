import {WeaponEntity} from '../database/rage/weapon/weapon.entity';
import {PipeTransform, Injectable, NotFoundException} from '@nestjs/common';
import {WeaponRepository} from '../database/rage/weapon/weapon.repository';

@Injectable()
export class WeaponPipe implements PipeTransform {
  constructor(private readonly weaponRepo: WeaponRepository) {}

  async transform(weaponID: number): Promise<WeaponEntity> {
    try {
      return await this.weaponRepo.findOneByIDOrFail(weaponID);
    } catch {
      throw new NotFoundException('Weapon does not exist');
    }
  }
}
