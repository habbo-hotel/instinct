import {AUTH_SCOPE, AuthScopes} from './auth.types';

export const authScopes: AuthScopes = {
  [AUTH_SCOPE.VIEW_ADMIN]: {
    id: AUTH_SCOPE.VIEW_ADMIN,
    name: 'View Admin Panel',
    desc: 'Allows the user to see the admin panel and access it',
  },
  [AUTH_SCOPE.LIST_STAFF]: {
    id: AUTH_SCOPE.LIST_STAFF,
    name: 'Show as Staff',
    desc: 'Users with this permission will be visible on the staff page',
  },
};
