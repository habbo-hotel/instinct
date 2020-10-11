import { roomService } from 'services';
import { Room } from 'instinct-interfaces';
import { createFetchHook } from '../fetch-hook.base';

export const useFetchAllRooms = () => createFetchHook<Room[]>(roomService.getAll);
