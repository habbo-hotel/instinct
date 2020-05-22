import {UserEntity} from '../../user';
import {BusinessJobEntity} from '../business-job';
import {Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';

@Entity('rp_job_applications')
export class BusinessJobApplicationEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({name: 'job_id', type: 'int'})
  jobID!: number;

  @ManyToOne(() => BusinessJobEntity)
  @JoinColumn({name: 'job_id'})
  job?: BusinessJobEntity;

  @Column({name: 'user_id', type: 'int'})
  userID!: number;

  @ManyToOne(() => UserEntity, user => user.jobApplications)
  @JoinColumn({name: 'user_id'})
  user?: UserEntity;

  @Column({type: 'text'})
  content!: string;

  @CreateDateColumn({name: 'timestamp', type: 'timestamp'})
  createdAt!: Date;
}
