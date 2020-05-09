import {UserEntity} from '../user';
import {BusinessEntity} from './business.entity';
import {Column, Entity, JoinColumn, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';

@Entity('group_memberships')
export class BusinessMemberEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({name: 'user_id'})
  userID!: number;

  @ManyToOne(() => UserEntity)
  @JoinColumn({name: 'user_id'})
  user?: UserEntity;

  @Column({name: 'group_id'})
  businessID!: number;

  @ManyToOne(() => BusinessEntity)
  @JoinColumn({name: 'group_id'})
  business?: BusinessEntity;
}
