import { WeaponService } from './';
import { AxiosResponse } from 'axios';
import { backendAPI } from 'instinct-frontend';
import { Weapon } from 'instinct-rp-interfaces';

class WeaponServiceImplementation implements WeaponService {

  async getAll() {
    const allWeapons: AxiosResponse<Weapon[]> = await backendAPI.get('weapons');
    return allWeapons.data;
  }

  async getOneByID(weaponID: number) {
    const weapon: AxiosResponse<Weapon> = await backendAPI.get(`weapons/${weaponID}`);
    return weapon.data;
  }

}

export const weaponService: WeaponService = new WeaponServiceImplementation();