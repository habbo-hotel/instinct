import {AxiosResponse} from 'axios';
import {Injectable} from '@nestjs/common';
import {googleRecaptchaAPI} from './recaptcha.axios';
import {googleRecaptchaKey} from '../config/environment';

@Injectable()
export class GoogleRecaptchaService {
  async passedVerification(response: string): Promise<boolean> {
    const {
      data,
    }: AxiosResponse<Record<
      'success',
      boolean
    >> = await googleRecaptchaAPI.post(
      `siteverify?secret=${googleRecaptchaKey}&response=${response}`
    );
    return data.success;
  }
}
