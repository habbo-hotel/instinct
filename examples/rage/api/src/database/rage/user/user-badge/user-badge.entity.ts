import {UserEntity} from '../user/user.entity';
import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';

@Entity('users_badges')
export class UserBadgeEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({name: 'badge_id', type: 'int'})
  badgeID!: number;

  @Column({name: 'user_id', type: 'int'})
  userID!: number;

  @ManyToOne(() => UserEntity, user => user.badges)
  user?: UserEntity;
}
