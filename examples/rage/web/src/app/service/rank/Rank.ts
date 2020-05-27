import { RankTypes } from './';
import { AxiosResponse } from 'axios';
import { Rank } from 'instinct-rp-interfaces';
import { backendAPI } from 'instinct-frontend';

class RankService implements RankTypes {
  async getAll() {
    const ranks: AxiosResponse<Rank[]> = await backendAPI.get('ranks');
    return ranks.data;
  }

  async getStaff() {
    const ranks: AxiosResponse<Rank[]> = await backendAPI.get('ranks/staff');
    return ranks.data;
  }

  async getByID(rankID: string): Promise<any> {
    const rank: AxiosResponse<Rank> = await backendAPI.get(`ranks/${rankID}`);
    return rank.data;
  }
}

export const rankService: RankTypes = new RankService();
