export interface Health {
  usersOnline: number;
  roomsActive: number;
  systemVersion: string;
}

export const exampleHealth: Health = {
  usersOnline: 0,
  roomsActive: 0,
  systemVersion: '0.0.0',
};
