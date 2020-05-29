export enum AUTH_SCOPE {
  VIEW_ADMIN = 'view_admin',
  SHOW_STAFF = 'show_staff',
  CREATE_RANK = 'create_rank',
  DELETE_RANK = 'delete_rank',
}

export interface SingleAuthScope {
  id: AUTH_SCOPE;
  name: string;
  desc: string;
}

export type AuthScopes = Record<AUTH_SCOPE, SingleAuthScope>;
