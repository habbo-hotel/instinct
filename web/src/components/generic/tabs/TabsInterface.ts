import { ReactNode } from 'react';

export interface Tab {
  text: ReactNode;
  path: string;
}

export interface TabsProps {
  tabs: Tab[];
}
