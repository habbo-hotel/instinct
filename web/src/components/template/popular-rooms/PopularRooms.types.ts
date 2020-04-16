import { Room } from 'fashionkilla-interfaces';

export interface PopularRoomsState {
  rooms: Room[];
  showSpinner: boolean;
}

export const defaultPopularRoomsState: PopularRoomsState = {
  rooms: [],
  showSpinner: true,
};
