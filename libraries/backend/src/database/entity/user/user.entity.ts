import {RankEntity} from '../rank';
import {RoomEntity} from '../room';
import {PhotoEntity} from '../photo';
import {UserBadgesEntity} from './user-badges.entity';
import {Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {GroupEntity} from '../group';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn({name: 'id'})
  id?: number;

  @Column({name: 'username', unique: true})
  username!: string;

  @Column({name: 'real_name', nullable: true})
  realName?: string;

  @Column({name: 'password'})
  password!: string;

  @Column({name: 'mail'})
  email!: string;

  @Column({name: 'mail_verified', select: false, default: 0})
  mailVerified!: number;

  @Column({name: 'account_created'})
  accountCreated!: number;

  @Column({name: 'account_day_of_birth', default: 0})
  accountDayOfBirth!: number;

  @Column({name: 'last_login'})
  lastLogin!: number;

  @Column({name: 'last_online', default: 0})
  lastOnline!: number;

  @Column({name: 'motto', nullable: true, default: 'Nectar'})
  motto?: string;

  @Column({
    name: 'look',
    default: 'lg-270-82.hd-180-1.ch-210-66.sh-290-81.hr-100-40',
  })
  figure!: string;

  @Column({name: 'gender', type: 'enum', enum: ['M', 'F'], default: 'M'})
  gender!: string;

  @Column({name: 'rank'})
  rankID!: number;

  @ManyToOne(() => RankEntity)
  @JoinColumn({name: 'rank'})
  rank?: RankEntity;

  @Column({name: 'credits'})
  credits!: number;

  @Column({name: 'pixels'})
  pixels!: number;

  @Column({name: 'points'})
  points!: number;

  @Column({name: 'online', type: 'enum', enum: ['0', '1', '2'], default: '0'})
  online!: number;

  @Column({name: 'auth_ticket', nullable: true})
  authTicket?: string;

  @Column({name: 'ip_register', default: '127.0.0.1'})
  ipRegister!: string;

  @Column({name: 'ip_current', default: '127.0.0.1'})
  ipCurrent!: string;

  @Column({name: 'machine_id', nullable: true})
  machineID?: string;

  @Column({name: 'home_room', default: 0})
  homeRoom!: number;

  @OneToMany(() => PhotoEntity, photo => photo.user)
  photos?: PhotoEntity[];

  @OneToMany(() => RoomEntity, room => room.owner)
  rooms?: RoomEntity[];

  @OneToMany(() => UserBadgesEntity, badge => badge.user)
  badges?: UserBadgesEntity[];

  @ManyToMany(() => UserEntity)
  @JoinTable({
    name: 'messenger_friendships',
    joinColumn: {
      name: 'user_one_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'user_two_id',
      referencedColumnName: 'id',
    },
  })
  friends?: UserEntity[];

  @OneToMany(() => GroupEntity, group => group.user)
  groups?: GroupEntity[];

  @ManyToMany(() => GroupEntity, group => group.members)
  joinedGroups?: GroupEntity[];
}
