import {UserEntity} from '@instinct-prj/backend';
import {BusinessPositionEntity} from './business-position.entity';
import {
  Column,
  Entity,
  JoinColumn,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import {BusinessType} from '@instinct-prj/interface-rp';

@Entity('roleplay_businesses')
export class BusinessEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({type: 'varchar', length: 100})
  name!: string;

  @Column({type: 'text'})
  desc!: string;

  @Column({type: 'varchar'})
  type!: BusinessType;

  @Column({type: 'int'})
  balance!: number;

  @Column({type: 'varchar', length: 25})
  badge!: string;

  @Column({name: 'work_room', type: 'int'})
  workRoom!: number;

  @Column({name: 'is_listed', type: 'tinyint'})
  isListed!: number;

  @Column({name: 'user_id', type: 'int'})
  userID!: number;

  @ManyToOne(() => UserEntity)
  @JoinColumn({name: 'user_id'})
  user?: UserEntity;

  @OneToMany(
    () => BusinessPositionEntity,
    businessPosition => businessPosition.business
  )
  positions?: BusinessPositionEntity[];
}
