import { UserBan } from '@instinct/interface';

export interface EditBanModalProps {
  ban: UserBan;
  onChange(): void;
}