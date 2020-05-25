import { ReactNode } from 'react';

export interface RowContainerProps {
  image: ReactNode;
  header: string;
  children: ReactNode;
  users: number;
}