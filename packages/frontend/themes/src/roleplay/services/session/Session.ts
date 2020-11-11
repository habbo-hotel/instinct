import {AxiosResponse} from 'axios';
import {RPSessionService} from './Session.types';
import {backendAPI} from '@instinct-prj/frontend';
import {UserRPStats} from '@instinct-prj/interface-rp';

class RPSessionServiceImplementation implements RPSessionService {
  async getRPStats() {
    const user: AxiosResponse<UserRPStats> = await backendAPI.get('session/rp');
    return user.data;
  }
}

export const rpSessionService: RPSessionService = new RPSessionServiceImplementation();
