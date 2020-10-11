import { roomService } from 'services';
import { Room } from 'instinct-interfaces';
import { createFetchHook } from '../fetch-hook.base';

export const useFetchPopularRooms = () => createFetchHook<Room[]>(roomService.getMostPopular);
