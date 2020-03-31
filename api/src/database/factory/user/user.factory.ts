import { getRepository } from 'typeorm';
import { UserEntity } from '../../entity/user';
import {
  defaultUserCredits,
  defaultUserLook,
  defaultUserMotto,
  defaultUserPixels,
} from '../../../config';

export function userFactory(
  changes?: Partial<UserEntity>,
): Promise<UserEntity> {
  return getRepository(UserEntity).save({
    username: 'Test',
    motto: defaultUserMotto,
    email: 'test@testing.com',
    password: 'password',
    rankID: 0,
    figure: defaultUserLook,
    credits: defaultUserCredits,
    pixels: defaultUserPixels,
    online: 0,
    ...changes,
  });
}
