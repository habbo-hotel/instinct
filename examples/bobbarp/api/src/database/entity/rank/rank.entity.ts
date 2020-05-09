import {UserEntity} from '../user';
import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';

@Entity('ranks')
export class RankEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name!: string;

  @Column({name: 'badgeid'})
  badge!: string;

  @OneToMany(() => UserEntity, user => user.rank)
  users?: UserEntity[];
}
