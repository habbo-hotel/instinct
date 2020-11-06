import {BusinessPositionEntity} from './business-position.entity';
import {UserEntity} from '@instinct-prj/backend/database/user/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';

@Entity('roleplay_businesses')
export class BusinessEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({type: 'varchar', length: 100})
  name!: string;

  @Column({type: 'text'})
  desc!: string;

  @Column({type: 'int', length: 11})
  balance!: number;

  @Column({type: 'varchar', length: 25})
  badge!: string;

  @Column({name: 'work_room', type: 'int', length: 11})
  workRoom!: number;

  @Column({name: 'user_id', type: 'int', length: 11})
  userID!: number;

  @ManyToOne(() => UserEntity)
  @JoinColumn({name: 'user_id'})
  user?: UserEntity;

  @OneToMany(
    () => BusinessPositionEntity,
    businessPosition => businessPosition.businessID
  )
  positions?: BusinessPositionEntity[];
}
