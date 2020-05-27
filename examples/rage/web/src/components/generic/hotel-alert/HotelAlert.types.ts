import { ReactNode } from 'react';

export interface HotelAlertProps {
  title: ReactNode;
  children: ReactNode;
  onToggle?: () => void;
}
