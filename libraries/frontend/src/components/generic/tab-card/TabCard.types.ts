import { ReactNode } from 'react';

export interface TabItem {
  name: string;
  icon: string;
  children: ReactNode;
}

export interface TabCardProps {
  header: ReactNode;
  tabs: TabItem[];
}
