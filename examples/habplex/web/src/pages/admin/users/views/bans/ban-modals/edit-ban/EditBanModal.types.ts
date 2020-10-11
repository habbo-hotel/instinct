import { UserBan } from 'instinct-interfaces';

export interface EditBanModalProps {
  ban: UserBan;
  onChange(): void;
}