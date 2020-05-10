import { AxiosResponse } from 'axios';
import { ConfigService } from '../config';
import { Injectable } from '@nestjs/common';
import { googleRecaptchaAPI } from './recaptcha.axios';
import { ConfigEntity } from '../database/entity/config';

@Injectable()
export class GoogleRecaptchaService {

  constructor(private readonly configService: ConfigService) { }

  async passedVerification(response: string): Promise<boolean> {
    const { googleRecaptchaSecretKey, googleRecaptchaSiteKey }: ConfigEntity = await this.configService.getConfig();
    const { data }: AxiosResponse<Record<'success', boolean>> = await googleRecaptchaAPI.post('siteverify', {
      secret: googleRecaptchaSecretKey,
      response,
    });

    return data.success;
  }

}