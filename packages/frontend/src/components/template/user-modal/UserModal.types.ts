import {ReactNode} from 'react';
import {User} from '@instinct/interface';

export interface UserModalProps {
  children: ReactNode;
  user: User;
}
