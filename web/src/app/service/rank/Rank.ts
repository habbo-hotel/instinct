import { RankInterface } from './';
import { AxiosResponse } from 'axios';
import { backendAPI } from '../../BackendAPI';
import { Rank } from 'fashionkilla-interfaces';

class RankService implements RankInterface {

  async getAll() {
    const ranks: AxiosResponse<Rank[]> = await backendAPI.get('ranks');
    return ranks.data;
  }

  async getByID(rankID: string): Promise<any> {
    const rank: AxiosResponse<Rank> = await backendAPI.get(`ranks/${rankID}`);
    return rank.data;
  }

}

export const rankService: RankInterface = new RankService();