import {RankEntity} from '../rank/rank.entity';
import {Column, Entity, JoinColumn, ManyToMany, PrimaryGeneratedColumn} from 'typeorm';

@Entity('ranks_scopes')
export class RankScopeEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({name: 'ranks_id', type: 'int'})
  rankID!: number;

  @Column({type: 'varchar'})
  scope!: string;

  @ManyToMany(() => RankEntity, rank => rank.scopes)
  @JoinColumn({name: 'ranks_id'})
  ranks?: RankEntity[];
}
