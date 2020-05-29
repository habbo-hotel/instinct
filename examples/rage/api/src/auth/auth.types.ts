export enum AUTH_SCOPE {
  VIEW_ADMIN = 'viewAdmin',
  LIST_STAFF = 'listStaff'
}

export interface SingleAuthScope {
  id: AUTH_SCOPE;
  name: string;
  desc: string;
}

export type AuthScopes = Record<AUTH_SCOPE, SingleAuthScope>;