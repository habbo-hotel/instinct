import { Group } from 'fashionkilla-interfaces';

export interface GroupService {
  getAll(): Promise<Group[]>;

  getMostPopular(): Promise<Group[]>;

  getByID(groupID: number): Promise<Group>;
}
