import {AxiosResponse} from 'axios';
import {GangService} from './Gang.types';
import {Gang} from '@instinct/interface-rp';
import {backendAPI} from '@instinct/frontend';

export class GangServiceImplementation implements GangService {
  async getAll() {
    const gangs: AxiosResponse<Gang[]> = await backendAPI.get('gangs');
    return gangs.data;
  }

  async getByID(gangID: string) {
    const gang: AxiosResponse<Gang> = await backendAPI.get(`gangs/${gangID}`);
    return gang.data;
  }
}
