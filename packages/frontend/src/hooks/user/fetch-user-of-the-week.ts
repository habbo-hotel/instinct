import {User} from '@instinct/interface';
import {userService} from '@instinct/frontend';
import {createFetchHook} from '../fetch-hook.base';

export const useFetchUserOfTheWeek = () =>
  createFetchHook<User[]>(userService.getUserOfTheWeek);
