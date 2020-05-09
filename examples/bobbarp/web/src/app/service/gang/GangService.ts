import { GangService } from './';
import { AxiosResponse } from 'axios';
import { backendAPI } from 'instinct-frontend';
import { Gang } from 'instinct-rp-interfaces';

class GangServiceImplementation implements GangService {

  async getAll(): Promise<Gang[]> {
    const gangs: AxiosResponse<Gang[]> = await backendAPI.get('gangs');
    return gangs.data;
  }

  async getTop(): Promise<Gang[]> {
    const gangs: AxiosResponse<Gang[]> = await backendAPI.get('gangs/top');
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