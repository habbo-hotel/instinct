import { Rank } from 'instinct-interfaces';

export interface RankTypes {
  getAll(): Promise<Rank[]>;

  getStaff(): Promise<Rank[]>;

  getByID(rankID: string): Promise<Rank>;
}
