import { exampleRank, Rank } from 'instinct-interfaces';

export interface RankEditorProps {
  defaultRank?: Rank;
  onSave(rank: Rank): Promise<void>;
}

export interface RankEditorState {
  rank: Rank;
  showError: boolean;
  showSpinner: boolean;
}

export const defaultRankEditorState: RankEditorState = {
  rank: exampleRank,
  showError: false,
  showSpinner: false,
}