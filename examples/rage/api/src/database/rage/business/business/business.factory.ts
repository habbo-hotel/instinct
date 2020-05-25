import {getRepository} from 'typeorm';
import {BusinessEntity} from './business.entity';
import {RoomEntity} from '../../room/room.entity';
import {roomFactory} from '../../room/room.factory';
import {UserEntity} from '../../user/user/user.entity';
import {userFactory} from '../../user/user/user.factory';
import {BusinessApplyType, BusinessType} from './business.types';

export async function businessFactory(changes?: Partial<BusinessEntity>): Promise<BusinessEntity> {
  const owner: UserEntity = changes?.owner ?? (await userFactory());
  const room: RoomEntity = changes?.room ?? (await roomFactory());

  return getRepository(BusinessEntity).save({
    id: undefined,
    room,
    owner,
    name: 'Police',
    description: 'We catch the bad guys and keep people safe',
    state: 1,
    badge: '-',
    type: BusinessType.State,
    bankBalance: 1000,
    stock: 1000,
    taxPRSI: 0,
    taxPAYI: 0,
    hiring: 0,
    hidden: 0,
    applyType: BusinessApplyType.Apply,
    employees: [],
    positions: [],
    ...changes,
  });
}
