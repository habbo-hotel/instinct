import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {WeaponEntity} from './weapon.entity';
import {InjectRepository} from '@nestjs/typeorm';

@Injectable()
export class WeaponRepository {
  constructor(@InjectRepository(WeaponEntity) private readonly weaponRepo: Repository<WeaponEntity>) {}

  getAll(): Promise<WeaponEntity[]> {
    return this.weaponRepo.find();
  }

  findOneByIDOrFail(weaponID: number): Promise<WeaponEntity> {
    return this.weaponRepo.findOneOrFail(weaponID);
  }
}
