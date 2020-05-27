import { GangService } from './';
import { AxiosResponse } from 'axios';
import { Gang } from 'instinct-rp-interfaces';
import { backendAPI } from 'instinct-frontend';

class GangServiceImplementation implements GangService {
  async getAll(): Promise<Gang[]> {
    const gangs: AxiosResponse<Gang[]> = await backendAPI.get('gangs');
    return gangs.data;
  }

  async getMostKills(): Promise<Gang[]> {
    const gangs: AxiosResponse<Gang[]> = await backendAPI.get('gangs/top/kills');
    return gangs.data;
  }

  async getMostDeaths(): Promise<Gang[]> {
    const gangs: AxiosResponse<Gang[]> = await backendAPI.get('gangs/top/deaths');
    return gangs.data;
  }

  async getByID(gangID: number): Promise<Gang> {
    const gang: AxiosResponse<Gang> = await backendAPI.get(`gangs/${gangID}`);
    return gang.data;
  }

  async search(name: string): Promise<Gang[]> {
    const gangs: AxiosResponse<Gang[]> = await backendAPI.post('gangs/search', { name });
    return gangs.data;
  }
}

export const gangService: GangService = new GangServiceImplementation();
