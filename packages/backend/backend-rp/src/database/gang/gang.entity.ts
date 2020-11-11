import {UserEntity} from '@instinct-prj/backend';
import {GangRankEntity} from './gang-rank.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';

@Entity('roleplay_gangs')
export class GangEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name!: string;

  @Column()
  emblem!: string;

  @Column({name: 'leader_id'})
  userID!: number;

  @ManyToOne(() => UserEntity)
  @JoinColumn({name: 'leader_id'})
  user?: UserEntity;

  @OneToMany(() => GangRankEntity, gangRank => gangRank.gang)
  ranks?: GangRankEntity[];
}
