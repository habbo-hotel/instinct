import {BadgeEntity} from '../badge';
import {UserEntity} from './user.entity';
import {Badge} from 'instinct-interfaces';
import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';

export function badgeWire(userBadge: UserBadgesEntity): Badge {
  return {
    id: userBadge.badgeID,
    code: userBadge.badge!.code,
  };
}

@Entity('user_badges')
export class UserBadgesEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({name: 'user_id', type: 'int'})
  userID!: number;

  @ManyToOne(() => UserEntity, user => user.badges)
  @JoinColumn({name: 'user_id'})
  user?: UserEntity;

  @Column({name: 'badge_slot', default: 0, type: 'int'})
  slotID!: number;

  @Column({name: 'badge_id'})
  badgeID!: number;

  @ManyToOne(() => BadgeEntity, badge => badge.users)
  @JoinColumn({name: 'badge_id'})
  badge?: BadgeEntity;
}
