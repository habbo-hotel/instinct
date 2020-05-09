import {UserEntity} from '../user';
import {Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn} from 'typeorm';

@Entity('gang')
export class GangEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name!: string;

  @Column({default: 0, type: 'int'})
  kills!: number;

  @Column({default: 0, type: 'int'})
  dead!: number;

  @Column({default: 0, type: 'int'})
  xp!: number;

  @Column({name: 'owner', default: 0, type: 'int'})
  ownerID!: number;

  @ManyToOne(() => UserEntity, user => user.gangs)
  @JoinColumn({name: 'owner'})
  owner?: UserEntity;
}
