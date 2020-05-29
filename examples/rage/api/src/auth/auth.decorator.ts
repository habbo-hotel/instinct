import {AUTH_SCOPE} from './auth.types';
import {AuthGuard} from '@nestjs/passport';
import {AuthScopeGuard} from './auth-scope.guard';
import {applyDecorators, SetMetadata, UseGuards} from '@nestjs/common';

// tslint:disable-next-line:variable-name - In Typescript decorators start with a capital letter
export function HasScope(scope: AUTH_SCOPE) {
  return applyDecorators(UseGuards(AuthGuard('bearer-token'), AuthScopeGuard), SetMetadata('scope', scope));
}
