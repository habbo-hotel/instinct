import {UserEntity} from '../../user/user/user.entity';
import {RankScopeEntity} from '../rank-scope/rank-scope.entity';
import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';

@Entity('ranks')
export class RankEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name!: string;

  @Column({name: 'description', type: 'text'})
  desc!: string;

  @Column({name: 'badgeid'})
  badge!: string;

  @OneToMany(() => UserEntity, user => user.rank)
  users?: UserEntity[];

  @OneToMany(() => RankScopeEntity, rankScope => rankScope.ranks)
  scopes?: RankScopeEntity[];
}
