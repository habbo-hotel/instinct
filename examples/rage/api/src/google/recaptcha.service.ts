import {AxiosResponse} from 'axios';
import * as FormData from 'form-data';
import {ConfigService} from '../config';
import {Injectable} from '@nestjs/common';
import {googleRecaptchaAPI} from './recaptcha.axios';
import {ConfigEntity} from '../database/entity/config';

@Injectable()
export class GoogleRecaptchaService {
  constructor(private readonly configService: ConfigService) {}

  async passedVerification(response: string): Promise<boolean> {
    const {googleRecaptchaSecretKey}: ConfigEntity = await this.configService.getConfig();

    const googleQuery: FormData = new FormData();
    googleQuery.append('response', response);
    googleQuery.append('secret', googleRecaptchaSecretKey);

    console.log(response);

    const {data}: AxiosResponse<Record<'success', boolean>> = await googleRecaptchaAPI.post(
      `siteverify?secret=${googleRecaptchaSecretKey}&response=${response}`
    );

    console.log(data);
    return data.success;
  }
}
