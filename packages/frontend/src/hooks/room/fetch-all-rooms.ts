import {Room} from '@instinct/interface';
import {roomService} from '../../services/room';
import {createFetchHook} from '../fetch-hook.base';

export const useFetchAllRooms = () =>
  createFetchHook<Room[]>(roomService.getAll);
