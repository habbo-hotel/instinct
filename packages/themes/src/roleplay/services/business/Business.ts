import {AxiosResponse} from 'axios';
import {backendAPI} from '@instinct-prj/frontend';
import {BusinessService} from './Business.types';
import {Business} from '@instinct-prj/interface-rp';

export class BusinessServiceImplementation implements BusinessService {
  async getAll() {
    const businesses: AxiosResponse<Business[]> = await backendAPI.get(
      'businesses'
    );
    return businesses.data;
  }

  async getByID(businessID: string) {
    const business: AxiosResponse<Business> = await backendAPI.get(
      `businesses/${businessID}`
    );
    return business.data;
  }
}
