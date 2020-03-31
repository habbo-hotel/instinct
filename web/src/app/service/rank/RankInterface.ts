import { Rank } from 'fashionkilla-interfaces';

export interface RankInterface {

  getAll(): Promise<Rank[]>;

  getStaff(): Promise<Rank[]>;

  getByID(rankID: string): Promise<Rank>;

}