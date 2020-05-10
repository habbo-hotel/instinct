import { Group } from 'instinct-interfaces';

export interface PopularGroupsState {
  groups: Group[];
  showSpinner: boolean;
}

export const defaultPopularGroupsState: PopularGroupsState = {
  groups: [],
  showSpinner: true,
};
