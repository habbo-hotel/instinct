import {BusinessService} from './Business.types';
import {exampleBusiness} from '@instinct-prj/interface-rp';

export class BusinessServiceMock implements BusinessService {
  async getAll() {
    return [exampleBusiness];
  }

  async getByID(businessID: string) {
    return exampleBusiness;
  }
}
