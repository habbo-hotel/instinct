import { UpdateService } from './';
import { AxiosResponse } from 'axios';
import { backendAPI } from 'instinct-frontend';
import { Update } from 'instinct-rp-interfaces';

class UpdateServiceImplementation implements UpdateService {
  async getAll() {
    const updates: AxiosResponse<Update[]> = await backendAPI.get('updates');
    return updates.data;
  }

  async getOneByID(updateID: number) {
    const update: AxiosResponse<Update> = await backendAPI.get(`updates/${updateID}`);
    return update.data;
  }
}

export const updateService: UpdateService = new UpdateServiceImplementation();
