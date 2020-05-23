import {RoomEntity} from '../../room/room.entity';
import {UserEntity} from '../../user/user/user.entity';
import {BusinessApplyType, BusinessType} from './business.types';
import {BusinessJobEntity} from '../business-job/business-job.entity';
import {UserRPStatsEntity} from '../../user/user-rp-stats/user-rp-stats.entity';
import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, OneToMany} from 'typeorm';

@Entity('rp_jobs')
export class BusinessEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({name: 'owner_id', type: 'int'})
  userID!: number;

  @ManyToOne(() => UserEntity)
  @JoinColumn({name: 'owner_id'})
  owner?: UserEntity;

  @Column({type: 'varchar', length: 50})
  name!: string;

  @Column({name: 'desc', type: 'varchar'})
  description!: string;

  @Column({name: 'headquarters', type: 'int'})
  roomID!: number;

  @ManyToOne(() => RoomEntity)
  @JoinColumn({name: 'headquarters'})
  room?: RoomEntity;

  @Column({type: 'varchar', length: 256})
  badge!: string;

  @Column({name: 'created', type: 'int'})
  dateCreated!: number;

  @Column({type: 'enum'})
  type!: BusinessType;

  @Column({name: 'bank_balance', type: 'int'})
  bankBalance!: number;

  @Column({type: 'int'})
  stock!: number;

  @Column({name: 'tax_prsi', type: 'int'})
  taxPRSI!: number;

  @Column({name: 'tax_payi', type: 'int'})
  taxPAYI!: number;

  @Column({type: 'int'})
  hiring!: number; // 0 or 1

  @Column({type: 'int'})
  hidden!: number; // 0 or 1

  @Column({name: 'apply_type', type: 'enum'})
  applyType!: BusinessApplyType;

  @OneToMany(() => UserRPStatsEntity, userRPStats => userRPStats.job)
  employees?: UserRPStatsEntity[];

  @OneToMany(() => BusinessJobEntity, businessJob => businessJob.business)
  jobs?: BusinessJobEntity[];
}
