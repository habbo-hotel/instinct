export interface HealthTypes {
  uptime: number; // in milliseconds
  onlineUsers: number;
  systemVersion: string;
  setStore?: (changes: Partial<HealthTypes>) => void;
}

export const defaultHealthInterface: HealthTypes = {
  uptime: 0,
  onlineUsers: 0,
  systemVersion: '0.0.0',
  setStore: undefined,
};
