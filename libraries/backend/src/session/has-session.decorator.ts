import {UseGuards} from '@nestjs/common';
import {AuthGuard} from '@nestjs/passport';
import {AccountBannedGuard} from './account-ban.guard';

export function HasSession() {
  return UseGuards(AuthGuard('bearer-token'), AccountBannedGuard);
}
