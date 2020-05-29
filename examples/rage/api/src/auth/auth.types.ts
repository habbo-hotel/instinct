export enum AUTH_SCOPE {
  ROOT = 'root',
  VIEW_ADMIN = 'view_admin',
  SHOW_STAFF = 'show_staff',
  CREATE_RANK = 'create_rank',
  DELETE_RANK = 'delete_rank',
  CREATE_UPDATE = 'create_update',
  MODIFY_UPDATE = 'modify_update',
  DELETE_UPDATE = 'delete_update',
}

export interface SingleAuthScope {
  id: AUTH_SCOPE;
  name: string;
  desc: string;
}

export type AuthScopes = Record<AUTH_SCOPE, SingleAuthScope>;
