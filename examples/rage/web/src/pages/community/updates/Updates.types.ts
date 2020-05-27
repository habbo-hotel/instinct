export interface UpdatesState {
  updates: any[];
  showSpinner: boolean;
}

export const defaultUpdatesState: UpdatesState = {
  updates: [],
  showSpinner: true,
};
