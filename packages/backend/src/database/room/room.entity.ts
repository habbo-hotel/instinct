import {UserEntity} from '../user/user.entity';
import {
  Column,
  JoinColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
  Entity,
} from 'typeorm';

@Entity('rooms')
export class RoomEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({default: 0, name: 'owner_id', type: 'int'})
  ownerID!: number;

  @ManyToOne(() => UserEntity, user => user.rooms)
  @JoinColumn({name: 'owner_id'})
  owner?: UserEntity;

  @Column({default: 0, name: 'owner_name', type: 'varchar', length: 25})
  ownerName!: string;

  @Column({default: '', type: 'varchar', length: 50})
  name!: string;

  @Column({default: '', type: 'varchar', length: 512})
  description!: string;

  @Column({default: '', type: 'varchar', length: 20})
  model!: string;

  @Column({default: '', type: 'varchar', length: 20})
  password!: string;

  @Column({type: 'int'})
  users!: number;

  @Column({name: 'users_max', type: 'int'})
  usersMax!: number;
}
