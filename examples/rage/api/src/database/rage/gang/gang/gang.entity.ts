import {UserEntity} from '../../user/user/user.entity';
import {GangRankEntity} from '../gang-rank/gang-rank.entity';
import {UserRPStatsEntity} from '../../user/user-rp-stats/user-rp-stats.entity';
import {Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn} from 'typeorm';

@Entity('rp_gangs')
export class GangEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name!: string;

  @Column({default: 0, type: 'int'})
  kills!: number;

  @Column({default: 0, type: 'int'})
  deaths!: number;

  @Column({default: 0, type: 'int'})
  points!: number;

  @Column({name: 'owner', default: 0, type: 'int'})
  ownerID!: number;

  @OneToOne(() => UserEntity, user => user.ownedGang)
  @JoinColumn({name: 'owner'})
  owner?: UserEntity;

  @OneToMany(() => UserRPStatsEntity, userRPStats => userRPStats.gang)
  users?: UserEntity[];

  @OneToMany(() => GangRankEntity, gangRank => gangRank.gang)
  ranks?: GangRankEntity[];
}
