import { ReactNode } from 'react';
import { UserBan } from '@instinct/interface';

export interface DeleteBanModalProps {
  ban: UserBan;
  onDeletion(): void;
  children: ReactNode;
}