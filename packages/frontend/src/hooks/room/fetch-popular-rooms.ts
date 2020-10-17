import {Room} from '@instinct/interface';
import {roomService} from '../../services/room';
import {createFetchHook} from '../fetch-hook.base';

export const useFetchPopularRooms = () =>
  createFetchHook<Room[]>(roomService.getMostPopular);
