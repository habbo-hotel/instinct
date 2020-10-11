import { ReactNode } from 'react';
import { UserBan } from 'instinct-interfaces';

export interface DeleteBanModalProps {
  ban: UserBan;
  onDeletion(): void;
  children: ReactNode;
}