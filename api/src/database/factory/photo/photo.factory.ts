import * as Moment from 'moment';
import { userFactory } from '../user';
import { getRepository } from 'typeorm';
import { UserEntity } from '../../entity/user';
import { PhotoEntity } from '../../entity/photo';

export async function photoFactory(
  changes?: Partial<PhotoEntity>,
): Promise<PhotoEntity> {
  const user: UserEntity = await userFactory();
  return getRepository(PhotoEntity).save({
    id: undefined,
    user,
    roomID: 0,
    imagePath: '/blah.png',
    createdAt: Moment().unix(),
    ...changes,
  });
}
