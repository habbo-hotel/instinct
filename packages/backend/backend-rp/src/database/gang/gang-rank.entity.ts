import {GangEntity} from './gang.entity';
import {UserRPStatEntity} from '../user/rp-stats.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('roleplay_gang_ranks')
export class GangRankEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({name: 'gang_id', type: 'integer'})
  gangID!: number;

  @ManyToOne(() => GangEntity)
  @JoinColumn({name: 'gang_id'})
  gang?: GangEntity;

  @Column()
  name!: string;

  @Column({name: 'index', type: 'integer'})
  order!: number;

  @Column({name: 'can_hire', type: 'tinyint'})
  canHire!: number;

  @Column({name: 'can_fire', type: 'tinyint'})
  canFire!: number;

  @Column({name: 'can_promote', type: 'tinyint'})
  canPromote!: number;

  @Column({name: 'can_demote', type: 'tinyint'})
  canDemote!: number;

  @OneToMany(() => UserRPStatEntity, rpStat => rpStat.gangRank)
  users?: UserRPStatEntity[];
}
