import {AuthGuard} from '@nestjs/passport';
import {TwoFactorAuthDTO} from './two-factor-auth.dto';
import {BackendUserSession} from '../session/session.type';
import {GetSession} from '../session/get-session.decorator';
import {TwoFactorAuthService} from './two-factor-auth.service';
import {BadRequestException, Body, Controller, Get, Post, UnauthorizedException, UseGuards} from '@nestjs/common';

@Controller('session/two_factor')
@UseGuards(AuthGuard('bearer-token'))
export class SessionTwoFactorAuthController {

  constructor(private readonly twoFactorAuthService: TwoFactorAuthService) { }

  @Get('qr')
  getQRCode(@GetSession() session: BackendUserSession): Promise<string> {
    return this.twoFactorAuthService.getQrCodeForUser(session.user);
  }

  @Post()
  async confirmIdentity(@GetSession() session: BackendUserSession, @Body() twoFactorAuthDTO: TwoFactorAuthDTO): Promise<any> {
    if (session.user.twoFactorSecret === null) {
      throw new BadRequestException("Your account doesn't have MFA enabled");
    }

    const isAuthenticated: boolean = await this.twoFactorAuthService.confirmIdentity(session, twoFactorAuthDTO.oneTimeCode);

    if (!isAuthenticated) {
      throw new UnauthorizedException({
        type: 'two_factor',
        data: 'Wrong MFA Code',
      });
    }

    return 'Your session has been authorized';
  }


}