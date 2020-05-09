import { BusinessService } from './';
import { AxiosResponse } from 'axios';
import { backendAPI } from 'instinct-frontend';
import { Business } from 'instinct-rp-interfaces';

class BusinessServiceImplementation implements BusinessService {

  async getAll(): Promise<Business[]> {
    const businesses: AxiosResponse<Business[]> = await backendAPI.get('businesses');
    return businesses.data;
  }

  async getByID(businessID: number): Promise<Business> {
    const business: AxiosResponse<Business> = await backendAPI.get(`businesses/${businessID}`);
    return business.data;
  }

  async search(name: string): Promise<Business[]> {
    const businesses: AxiosResponse<Business[]> = await backendAPI.post('businesses/search', { name });
    return businesses.data;
  }

}

export const businessService: BusinessService = new BusinessServiceImplementation();