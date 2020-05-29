import { ReactNode } from 'react';

export interface HotelAlertProps {
  style?: object;
  title: ReactNode;
  children: ReactNode;
  onToggle?: () => void;
}
