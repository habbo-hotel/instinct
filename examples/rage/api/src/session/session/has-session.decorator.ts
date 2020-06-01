import {UseGuards} from '@nestjs/common';
import {AuthGuard} from '@nestjs/passport';
import {SessionGuard} from './session.guard';

export function HasSession() {
  return UseGuards(AuthGuard('bearer-token'), SessionGuard);
}
