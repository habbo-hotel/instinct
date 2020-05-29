import {RankEntity} from '../rank/rank.entity';
import {AUTH_SCOPE} from '../../../../auth/auth.types';
import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';

@Entity('ranks_scopes')
export class RankScopeEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({name: 'ranks_id', type: 'int'})
  rankID!: number;

  @Column({type: 'varchar'})
  scope!: AUTH_SCOPE;

  @ManyToOne(() => RankEntity, rank => rank.scopes)
  @JoinColumn({name: 'ranks_id'})
  ranks?: RankEntity[];
}
