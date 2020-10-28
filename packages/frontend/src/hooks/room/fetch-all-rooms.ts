import {Room} from '@instinct-prj/interface';
import {roomService} from '../../services/room';
import {createFetchHook} from '../fetch-hook.base';

export const useFetchAllRooms = () =>
  createFetchHook<Room[]>(roomService.getAll);
