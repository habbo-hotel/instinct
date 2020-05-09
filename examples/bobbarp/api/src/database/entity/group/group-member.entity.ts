import {UserEntity} from '../user';
import {GroupEntity} from './group.entity';
import {Column, Entity, JoinColumn, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';

@Entity('group_memberships')
export class GroupMemberEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({name: 'user_id'})
  userID!: number;

  @ManyToOne(() => UserEntity)
  @JoinColumn({name: 'user_id'})
  user?: UserEntity;

  @Column({name: 'group_id'})
  groupID!: number;

  @ManyToOne(() => GroupEntity)
  @JoinColumn({name: 'group_id'})
  group?: GroupEntity;
}
