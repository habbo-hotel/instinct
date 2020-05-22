import {UserBadgesEntity} from '../user';
import {Entity, JoinColumn, OneToMany, PrimaryColumn} from 'typeorm';

@Entity('badge_definitions')
export class BadgeEntity {
  @PrimaryColumn()
  code!: string;

  @OneToMany(() => UserBadgesEntity, userBadge => userBadge.badge)
  @JoinColumn({name: 'code'})
  users?: UserBadgesEntity[];
}
