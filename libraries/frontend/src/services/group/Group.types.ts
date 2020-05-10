import { Group } from 'instinct-interfaces';

export interface GroupService {
  getAll(): Promise<Group[]>;

  getMostPopular(): Promise<Group[]>;

  getByID(groupID: number): Promise<Group>;
}
