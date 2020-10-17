import {Group} from '@instinct/interface';

export interface GroupService {
  getAll(): Promise<Group[]>;

  getMostPopular(): Promise<Group[]>;

  getByID(groupID: string): Promise<Group>;
}
