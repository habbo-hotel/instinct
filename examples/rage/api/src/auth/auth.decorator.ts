import {AUTH_SCOPE} from './auth.types';
import {SetMetadata} from '@nestjs/common';

// tslint:disable-next-line:variable-name - In Typescript decorators start with a capital letter
export const HasScope = (scope: AUTH_SCOPE) => SetMetadata('scope', scope);
