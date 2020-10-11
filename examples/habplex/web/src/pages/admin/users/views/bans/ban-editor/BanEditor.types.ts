import { ReactNode } from 'react';
import { UserBanDTO } from 'instinct-interfaces';

export interface BanEditorProps {
  children: ReactNode;
  defaultBan?: UserBanDTO;
  onSave(rank: UserBanDTO): Promise<void>;
}

export interface BanEditorState {
  ban: UserBanDTO;
  showModal: boolean;
  showError: boolean;
  showSpinner: boolean;
}

export const defaultBanDTO: UserBanDTO = {
  userID: 0,
  reason: '',
  banStart: 0,
  banEnd: 0,
}

export const defaultBanEditorState: BanEditorState = {
  ban: defaultBanDTO,
  showModal: false,
  showError: false,
  showSpinner: false,
}