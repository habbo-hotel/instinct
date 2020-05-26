import { WeaponService } from './';
import { AxiosResponse } from 'axios';
import { backendAPI, Weapon } from 'instinct-frontend';

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