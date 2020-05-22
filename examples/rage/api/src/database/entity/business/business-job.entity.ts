import {BusinessEntity} from './business.entity';
import {BusinessJobRank} from 'instinct-rp-interfaces';
import {BusinessJobApplicationEntity} from './business-job-application.entity';
import {Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn} from 'typeorm';

export enum BusinessJobEnum {
  Yes = '1',
  No = '0',
}

@Entity('rp_jobs_ranks')
export class BusinessJobEntity {
  @Column({name: 'job_id', type: 'int'})
  businessID!: number;

  @ManyToOne(() => BusinessEntity, business => business.jobs)
  @JoinColumn({name: 'job_id'})
  business?: BusinessEntity;

  @PrimaryGeneratedColumn({name: 'rank_id'})
  rankID!: number;

  @Column()
  name!: string;

  @Column({type: 'tinytext'})
  description!: string;

  @Column({name: 'male_figure'})
  maleFigure!: string;

  @Column({name: 'female_figure'})
  femaleFigure!: string;

  @Column({name: 'pay', type: 'int'})
  salary!: number;

  @Column({name: 'pay_time', type: 'int'})
  payTime!: number;

  @Column({name: 'work_rooms'})
  workRooms!: string;

  @Column({name: 'available_spots', type: 'int'})
  vacantSpots!: number;

  @Column({name: 'pwr_hire', type: 'int'})
  canHire!: number;

  @Column({name: 'pwr_fire', type: 'int'})
  canFire!: number;

  @Column({name: 'pwr_promote', type: 'int'})
  canPromote!: number;

  @Column({name: 'pwr_demote', type: 'int'})
  canDemote!: number;

  @Column({name: 'pwr_alert', type: 'int'})
  canAlert!: number;

  @Column({name: 'pwr_sendhome', type: 'int'})
  canSendHome!: number;

  @Column({type: 'enum'})
  rank!: BusinessJobRank;

  @OneToMany(() => BusinessJobApplicationEntity, businessJobApplication => businessJobApplication.job)
  applications?: BusinessJobApplicationEntity[];
}
