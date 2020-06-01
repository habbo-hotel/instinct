import {UserEntity} from '../user/user.entity';
import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';

@Entity('users_sessions')
export class UserSessionEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({name: 'users_id', type: 'int'})
  userID!: number;

  @ManyToOne(() => UserEntity, user => user.sessions)
  @JoinColumn({name: 'users_id'})
  user?: UserEntity;

  @Column({name: 'country', type: 'varchar'})
  country!: string;

  @Column({name: 'ip_address', type: 'varchar'})
  ipAddress!: string;

  @Column({name: 'operating_system', type: 'varchar'})
  operatingSystem!: string;

  @Column({name: 'authorized', type: 'tinyint', default: 1})
  authorized!: number;
}