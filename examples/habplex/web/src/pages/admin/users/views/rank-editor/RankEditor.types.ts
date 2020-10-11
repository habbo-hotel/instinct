import { ReactNode } from 'react';
import { RankDTO } from 'instinct-interfaces';

export interface RankEditorProps {
  children: ReactNode;
  defaultRank?: RankDTO;
  onSave(rank: RankDTO): Promise<void>;
}

export interface RankEditorState {
  rank: RankDTO;
  showModal: boolean;
  showError: boolean;
  showSpinner: boolean;
}

export const defaultRankDTO: RankDTO = {
  name: '',
  badge: 'ADM',
  level: 1,
  websiteShowStaff: false,
  websiteShowAdminPanel: false,
  websiteManageRanks: false,
  websiteManageUsers: false,
  websiteManageNews: false,
  websiteManageBans: false,
  users: [],
}

export const defaultRankEditorState: RankEditorState = {
  rank: defaultRankDTO,
  showModal: false,
  showError: false,
  showSpinner: false,
}