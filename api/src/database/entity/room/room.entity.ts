import { UserEntity } from '../user';
import { Injectable } from '@nestjs/common';
import { Column, JoinColumn, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Injectable()
export class RoomEntity {

  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ default: 0, name: 'owner_id', type: 'int', length: 11 })
  ownerID!: number;

  @ManyToOne(() => UserEntity, user => user.rooms)
  @JoinColumn({ name: 'owner_id' })
  owner?: UserEntity;

  @Column({ default: 0, name: 'owner_name', type: 'varchar', length: 25 })
  ownerName!: string;

  @Column({ default: '', type: 'varchar', length: 50 })
  name!: string;

  @Column({ default: '', type: 'varchar', length: 512 })
  description!: string;

  @Column({ default: '', type: 'varchar', length: 20 })
  model!: string;

  @Column({ default: '', type: 'varchar', length: 20 })
  password!: string;

  @Column({ type: 'int', length: 11 })
  users!: number;

  @Column({ type: 'int', length: 11 })
  usersMax!: number;

}