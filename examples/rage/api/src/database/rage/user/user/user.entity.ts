import {RoomEntity} from '../../room';
import { RankEntity } from '../../rank';
import { GangEntity } from '../../gang';
import {UserBadgeEntity} from '../user-badge';
import { HashService } from '../../../../common';
import {UserRPStatsEntity} from '../user-rp-stats';
import { BusinessEntity, BusinessJobApplicationEntity } from '../../business';
import {Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate } from 'typeorm';

@Entity('users')
export class UserEntity {

  private readonly hashService: HashService = new HashService();

  @PrimaryGeneratedColumn({name: 'id'})
  id?: number;

  @Column({name: 'username', unique: true})
  username!: string;

  @Column({name: 'password', select: false })
  password!: string;

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    if (this.password) {
      this.password = this.hashService.generate(this.password);
    }
  }

  @Column({name: 'mail'})
  email!: string;

  @Column({name: 'account_created'})
  accountCreated!: number;

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

  @Column({name: 'seasonal_currency'})
  pixels!: number;

  @Column({name: 'vip_points'})
  points!: number;

  @Column({name: 'online', type: 'enum', enum: ['0', '1', '2'], default: '0'})
  online!: number;

  @Column({name: 'auth_ticket', nullable: true})
  authTicket?: string;

  @Column({name: 'ip_reg', default: '127.0.0.1'})
  ipRegister!: string;

  @Column({name: 'ip_last', default: '127.0.0.1'})
  ipCurrent!: string;

  @Column({name: 'home_room', default: 0})
  homeRoom!: number;

  @OneToMany(() => RoomEntity, room => room.owner)
  rooms?: RoomEntity[];

  @OneToMany(() => UserBadgeEntity, badge => badge.user)
  badges?: UserBadgeEntity[];

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

  @OneToMany(() => BusinessEntity, business => business.owner)
  businesses?: BusinessEntity[];

  @OneToOne(() => GangEntity, gang => gang.owner)
  ownedGang?: GangEntity;

  @OneToMany(() => BusinessJobApplicationEntity, businessJobApplication => businessJobApplication.user)
  jobApplications?: BusinessJobApplicationEntity[];

  @OneToOne(() => UserRPStatsEntity, rpStats => rpStats.user)
  rpStats?: UserRPStatsEntity;
}
