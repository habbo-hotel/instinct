import { ReactNode } from 'react';
import { User } from 'instinct-interfaces';

export interface UserModalProps {
  children: ReactNode;
  user: User;
}
