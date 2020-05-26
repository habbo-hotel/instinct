import {WeaponPipe} from './weapon.pipe';
import {Weapon} from 'instinct-rp-interfaces';
import {Controller, Get, Param} from '@nestjs/common';
import {weaponWire} from '../database/rage/weapon/weapon.wire';
import {WeaponEntity} from '../database/rage/weapon/weapon.entity';
import {WeaponRepository} from '../database/rage/weapon/weapon.repository';

@Controller('weapons')
export class WeaponController {
  constructor(private readonly weaponRepo: WeaponRepository) {}

  @Get()
  async getAll(): Promise<Weapon[]> {
    const allWeapons: WeaponEntity[] = await this.weaponRepo.getAll();
    return allWeapons.map(weapon => weaponWire(weapon));
  }

  @Get(':weaponID')
  getByID(@Param('weaponID', WeaponPipe) weapon: WeaponEntity): Weapon {
    return weaponWire(weapon);
  }
}
