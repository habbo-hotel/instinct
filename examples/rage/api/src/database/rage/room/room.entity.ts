import {UserEntity} from '../user/user/user.entity';
import {Column, JoinColumn, PrimaryGeneratedColumn, ManyToOne, Entity} from 'typeorm';

@Entity('rooms_data')
export class RoomEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({default: 0, name: 'owner', type: 'int'})
  ownerID!: number;

  @ManyToOne(() => UserEntity, user => user.rooms)
  @JoinColumn({name: 'owner'})
  owner?: UserEntity;

  @Column({name: 'caption', default: '', type: 'varchar', length: 50})
  name!: string;

  @Column({default: '', type: 'varchar', length: 512})
  description!: string;

  @Column({name: 'model_name', default: '', type: 'varchar', length: 20})
  model!: string;

  @Column({default: '', type: 'varchar', length: 20})
  password!: string;

  @Column({name: 'users_now', type: 'int'})
  users!: number;

  @Column({name: 'users_max', type: 'int'})
  usersMax!: number;
}
