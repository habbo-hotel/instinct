import {BusinessEntity} from '../business/business.entity';
import {BusinessJobApplicationEntity} from '../business-job-application/business-job-application.entity';
import {Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Unique} from 'typeorm';

@Entity('rp_jobs_ranks')
@Unique(['businessID', 'rankID'])
export class BusinessPositionEntity {
  @PrimaryGeneratedColumn({name: 'unique_id'})
  id?: number;

  @Column({name: 'job_id', type: 'int'})
  businessID!: number;

  @ManyToOne(() => BusinessEntity, business => business.positions)
  @JoinColumn({name: 'job_id'})
  business?: BusinessEntity;

  @Column({name: 'rank_id', type: 'int'})
  rankID!: number;

  @Column()
  name!: string;

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

  @OneToMany(() => BusinessJobApplicationEntity, businessJobApplication => businessJobApplication.job)
  applications?: BusinessJobApplicationEntity[];
}
