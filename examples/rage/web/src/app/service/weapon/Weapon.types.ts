import { Weapon } from 'instinct-rp-interfaces';

export interface WeaponService {

  getAll(): Promise<Weapon[]>;

  getOneByID(weaponID: number): Promise<Weapon>;

}