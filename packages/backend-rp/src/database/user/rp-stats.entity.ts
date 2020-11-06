import {UserEntity} from '@instinct-prj/backend';
import {BusinessEntity} from '../business/business.entity';
import {BusinessPositionEntity} from '../business/business-position.entity';
import {
  Column,
  Entity,
  JoinColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';

@Entity('user_roleplay_data')
export class UserRPStatEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({name: 'user_id', type: 'int'})
  userID!: number;

  @ManyToOne(() => UserEntity)
  @JoinColumn({name: 'user_id'})
  user?: UserEntity;

  @Column({name: 'last_room_x', type: 'int'})
  lastRoomX!: number;

  @Column({name: 'last_room_y', type: 'int'})
  lastRoomY!: number;

  @Column({name: 'last_room_z', type: 'int'})
  lastRoomZ!: number;

  @Column({name: 'last_room_r', type: 'int'})
  lastRoomR!: number;

  @Column({name: 'current_health', type: 'int'})
  currentHealth!: number;

  @Column({name: 'max_health', type: 'int'})
  maxHealth!: number;

  @Column({name: 'current_energy', type: 'int'})
  currentEnergy!: number;

  @Column({name: 'max_energy', type: 'int'})
  maxEnergy!: number;

  @Column({name: 'is_dead', type: 'int'})
  isDead!: number;

  @Column({name: 'death_time', type: 'int'})
  deathTime!: number;

  @Column({name: 'is_working', type: 'int'})
  isWorking!: number;

  @Column({name: 'shift_time', type: 'int'})
  shiftTime!: number;

  @Column({name: 'business_id', type: 'int'})
  businessID!: number;

  @ManyToOne(() => BusinessEntity)
  @JoinColumn({name: 'business_id'})
  business?: BusinessEntity;

  @Column({name: 'business_rank', type: 'int'})
  businessPositionID!: number;

  @ManyToOne(() => BusinessPositionEntity)
  @JoinColumn({name: 'business_rank'})
  businessPosition?: BusinessPositionEntity;
}
