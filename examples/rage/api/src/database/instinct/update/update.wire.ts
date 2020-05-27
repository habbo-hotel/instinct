import { UpdateEntity } from './update.entity';
import { Update } from 'instinct-rp-interfaces';
import { userWire } from '../../rage/user/user/user.wire';

export function updateWire(updateEntity: UpdateEntity): Update {
  return {
    id: updateEntity.id!,
    user: userWire(updateEntity.user!),
    title: updateEntity.title,
    content: updateEntity.content,
    datePosted: updateEntity.timestamp.toISOString(),
  }
}