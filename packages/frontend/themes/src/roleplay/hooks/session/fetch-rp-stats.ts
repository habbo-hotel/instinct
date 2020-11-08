import {RPUser} from '@instinct-prj/interface-rp';
import {createFetchHook} from '@instinct-prj/frontend';
import {rpSessionService} from '../../services/session';

export const useFetchRPStats = () =>
  createFetchHook<RPUser>(rpSessionService.getRPUser);
