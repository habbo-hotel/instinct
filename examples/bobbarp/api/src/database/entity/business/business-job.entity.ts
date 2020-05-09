import {BusinessEntity} from './business.entity';
import {BusinessJobRank}  from 'instinct-rp-interfaces';
import { BusinessMemberEntity } from './business-member.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

export enum BusinessJobEnum {
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

  @Column({type: 'tinytext'})
  description!: string;

  @Column({ name: 'look_h' })
  lookH!: string;

  @Column({ name: 'look_f' })
  lookF!: string;

  @Column({ name: 'salaire', type: 'int' })
  salary!: number;

  @Column({ name: 'work_everywhere', type: 'enum' })
  workEverywhere!: BusinessJobEnum

  @Column({name: 'vacant_spots', type: 'int' })
  vacantSpots!: number;

  @Column({name: 'application_required', type: 'int' })
  applicationRequired!: BusinessJobEnum;

  @Column({type: 'enum'})
  rank!: BusinessJobRank;

  @OneToMany(() => BusinessMemberEntity, businessMember => businessMember.job)
  users?: BusinessMemberEntity[];

}
