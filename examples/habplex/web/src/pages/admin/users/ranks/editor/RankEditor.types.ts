import { ReactNode } from 'react';
import { exampleRank, Rank } from 'instinct-interfaces';

export interface RankEditorProps {
  children: ReactNode;
  defaultRank?: Rank;
  onSave(rank: Rank): Promise<void>;
}

export interface RankEditorState {
  rank: Rank;
  showModal: boolean;
  showError: boolean;
  showSpinner: boolean;
}

export const defaultRankEditorState: RankEditorState = {
  rank: exampleRank,
  showModal: false,
  showError: false,
  showSpinner: false,
}