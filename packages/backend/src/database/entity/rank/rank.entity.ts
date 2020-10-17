import {UserEntity} from '../user';
import {PermissionStatus} from './rank.types';
import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';

@Entity('permissions')
export class RankEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({name: 'rank_name'})
  name!: string;

  @Column()
  badge!: string;

  @Column({default: 1})
  level!: number;

  @OneToMany(() => UserEntity, user => user.rank)
  users?: UserEntity[];

  @Column({name: 'website_show_staff', type: 'enum', default: '0'})
  websiteShowStaff!: PermissionStatus;

  @Column({name: 'website_show_admin_panel', type: 'enum', default: '0'})
  websiteShowAdminPanel!: PermissionStatus;

  @Column({name: 'website_manage_news', type: 'enum', default: '0'})
  websiteManageNews!: PermissionStatus;

  @Column({name: 'website_manage_ranks', type: 'enum', default: '0'})
  websiteManageRanks!: PermissionStatus;

  @Column({name: 'website_manage_users', type: 'enum', default: '0'})
  websiteManageUsers!: PermissionStatus;

  @Column({name: 'website_manage_bans', type: 'enum', default: '0'})
  websiteManageBans!: PermissionStatus;
}
