import {AxiosResponse} from 'axios';
import {RPSessionService} from './Session.types';
import {backendAPI} from '@instinct-prj/frontend';
import {RPUser} from '@instinct-prj/interface-rp';

class RPSessionServiceImplementation implements RPSessionService {
  async getRPUser() {
    const user: AxiosResponse<RPUser> = await backendAPI.get('session/rp');
    return user.data;
  }
}

export const rpSessionService: RPSessionService = new RPSessionServiceImplementation();
