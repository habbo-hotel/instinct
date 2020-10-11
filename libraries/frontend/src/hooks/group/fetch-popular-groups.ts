import { groupService } from 'services';
import { Group } from 'instinct-interfaces';
import { createFetchHook } from '../fetch-hook.base';

export const useFetchPopularGroups = () => createFetchHook<Group[]>(groupService.getMostPopular);
