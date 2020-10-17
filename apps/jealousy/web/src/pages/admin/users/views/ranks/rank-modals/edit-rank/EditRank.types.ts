import { Rank } from '@instinct/interface';

export interface EditRankModalProps {
  rank: Rank;
  onChanges(): void;
}