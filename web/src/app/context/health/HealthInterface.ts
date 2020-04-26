export interface HealthInterface {
  uptime: number; // in milliseconds
  onlineUsers: number;
  systemVersion: string;
  setStore?: (changes: Partial<HealthInterface>) => void;
}

export const defaultHealthInterface: HealthInterface = {
  uptime: 0,
  onlineUsers: 0,
  systemVersion: '0.0.0',
  setStore: undefined,
}