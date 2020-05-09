import {BusinessEntity} from './business.entity';
import {BusinessJobRank}  from 'instinct-rp-interfaces';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { BusinessMemberEntity } from './business-member.entity';

export enum BusinessJobWorkEveryWhere {
  Yes = '1',
  No = '0',
}

@Entity('groups_rank')
export class BusinessJobEntity {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: 'job_id', type: 'int' })
  businessID!: number;

  @ManyToOne(() => BusinessEntity, business => business.jobs)
  @JoinColumn({ name: 'job_id' })
  business?: BusinessEntity;

  @Column({ name: 'rank_id', type: 'int' })
  rankID!: number;

  @Column()
  name!: string;

  @Column({ name: 'look_h' })
  lookH!: string;

  @Column({ name: 'look_f' })
  lookF!: string;

  @Column({ name: 'salaire', type: 'int' })
  salary!: number;

  @Column({ name: 'work_everywhere', type: 'enum' })
  workEverywhere!: BusinessJobWorkEveryWhere;

  @Column({type: 'enum'})
  rank!: BusinessJobRank;

  @OneToMany(() => BusinessMemberEntity, businessMember => businessMember.job)
  users?: BusinessMemberEntity[];

}
