import { ReactNode } from 'react';

export interface TabItem {
  name: ReactNode;
  icon: string;
  children: ReactNode;
}

export interface TabCardProps {
  tabs: TabItem[];
}
