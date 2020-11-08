import {BusinessService} from './Business.types';
import {BusinessDTO, exampleBusiness} from '@instinct-prj/interface-rp';

export class BusinessServiceMock implements BusinessService {
  async create(businessDTO: BusinessDTO) {
    return exampleBusiness;
  }

  async getAll() {
    return [exampleBusiness];
  }

  async getByID(businessID: string) {
    return exampleBusiness;
  }

  async delete(businessID: string) {
    return;
  }
}
