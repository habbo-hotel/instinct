import { BusinessService } from './';
import { AxiosResponse } from 'axios';
import { backendAPI } from 'instinct-frontend';
import { Business, BusinessJobApplication, BusinessPosition } from 'instinct-rp-interfaces';

class BusinessServiceImplementation implements BusinessService {

  async getAll() {
    const businesses: AxiosResponse<Business[]> = await backendAPI.get('businesses');
    return businesses.data;
  }

  async getGovernmentBusinesses() {
    const governmentBusinesses: AxiosResponse<Business[]> = await backendAPI.get('businesses?filter=government');
    return governmentBusinesses.data;
  }

  async getPrivateBusinesses() {
    const privateBusinesses: AxiosResponse<Business[]> = await backendAPI.get('businesses?filter=private');
    return privateBusinesses.data;
  }

  async getByID(businessID: number) {
    const business: AxiosResponse<Business> = await backendAPI.get(`businesses/${ businessID }`);
    return business.data;
  }

  async getAllPositions() {
    const allPositions: AxiosResponse<BusinessPosition[]> = await backendAPI.get('businesses/positions');
    return allPositions.data;
  }

  async getVacantPositions() {
    const vacantPositions: AxiosResponse<BusinessPosition[]> = await backendAPI.get('businesses/positions/vacant');
    return vacantPositions.data;
  }

  async getPositionByID(positionID: number) {
    const position: AxiosResponse<BusinessPosition> = await backendAPI.get(`businesses/positions/${positionID}`);
    return position.data;
  }

  async search(name: string) {
    const businesses: AxiosResponse<Business[]> = await backendAPI.post('businesses/search', { name });
    return businesses.data;
  }

  async applyForJob(jobID: number, content: string) {
    const jobApplication: AxiosResponse<BusinessJobApplication> = await backendAPI.post(`businesses/jobs/${jobID}/application`, { content });
    return jobApplication.data;
  }

}

export const businessService: BusinessService = new BusinessServiceImplementation();