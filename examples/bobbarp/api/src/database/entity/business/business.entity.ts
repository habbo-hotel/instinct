import {UserEntity} from '../user';
import {RoomEntity} from '../room';
import {BusinessJobEntity } from './business-job.entity';
import {BusinessMemberEntity} from './business-member.entity';
import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, OneToMany} from 'typeorm';

@Entity('groups')
export class BusinessEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({name: 'owner_id', type: 'int'})
  userID!: number;

  @ManyToOne(() => UserEntity)
  @JoinColumn({name: 'owner_id'})
  user?: UserEntity;

  @Column({type: 'varchar', length: 50})
  name!: string;

  @Column({name: 'desc', type: 'varchar', length: 250})
  description!: string;

  @Column({name: 'room_id', type: 'int'})
  roomID!: number;

  @ManyToOne(() => RoomEntity)
  @JoinColumn({name: 'room_id'})
  room?: RoomEntity;

  @Column({type: 'int'})
  state!: number;

  @Column({type: 'varchar', length: 256})
  badge!: string;

  @Column({name: 'created', type: 'int'})
  dateCreated!: number;

  @OneToMany(() => BusinessMemberEntity, businessMember => businessMember.business)
  members?: BusinessMemberEntity[];

  @OneToMany(() => BusinessJobEntity, businessJob => businessJob.business)
  jobs?: BusinessJobEntity[];
}
