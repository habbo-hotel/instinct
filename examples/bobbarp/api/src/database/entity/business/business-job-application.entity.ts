import { UserEntity } from '../user';
import { BusinessJobEntity } from './business-job.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('group_job_application')
export class BusinessJobApplicationEntity {

  @PrimaryGeneratedColumn()
  id?: number;

  @Column({name: 'job_id', type: 'int'})
  jobID!: number;

  @ManyToOne(() => BusinessJobEntity)
  @JoinColumn({ name: 'job_id' })
  job?: BusinessJobEntity;

  @Column({ name: 'user_id', type: 'int' })
  userID!: number;

  @ManyToOne(() => UserEntity, user => user.jobApplications)
  @JoinColumn({ name: 'user_id' })
  user?: UserEntity;

}