import {UserEntity} from '../user';
import {BusinessEntity} from './business.entity';
import {BusinessJobEntity } from './business-job.entity';
import { Column, Entity, JoinColumn, PrimaryGeneratedColumn, ManyToOne, OneToOne } from 'typeorm';

@Entity('group_memberships')
export class BusinessMemberEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({name: 'user_id', type: 'int'})
  userID!: number;

  @OneToOne(() => UserEntity, user => user.job)
  @JoinColumn({name: 'user_id'})
  user?: UserEntity;

  @Column({name: 'group_id', type: 'int'})
  businessID!: number;

  @ManyToOne(() => BusinessEntity)
  @JoinColumn({name: 'group_id'})
  business?: BusinessEntity;

  @Column({name: 'rank_id', type: 'int'})
  jobID!: number;

  @ManyToOne(() => BusinessJobEntity, businessJob => businessJob.users)
  @JoinColumn({name: 'rank_id'})
  job?: BusinessJobEntity;
}
