import {UserEntity} from '../user';
import {Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn} from 'typeorm';

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

  @OneToOne(() => UserEntity, user => user.ownedGang)
  @JoinColumn({name: 'owner'})
  owner?: UserEntity;

  @OneToMany(() => UserEntity, user => user.gang)
  users?: UserEntity[];
}
