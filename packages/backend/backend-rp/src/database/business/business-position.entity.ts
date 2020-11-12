import {BusinessEntity} from './business.entity';
import {UserRPStatEntity} from '../user/rp-stats.entity';
import {
  Column,
  Entity,
  JoinColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity('roleplay_business_ranks')
export class BusinessPositionEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({name: 'business_id', type: 'int'})
  businessID!: number;

  @Column({name: 'index', type: 'int'})
  order!: number;

  @Column({type: 'varchar', length: 100})
  name!: string;

  @Column({name: 'uniform_male', type: 'varchar', length: 100})
  maleUniform!: string;

  @Column({name: 'uniform_female', type: 'varchar', length: 100})
  femaleUniform!: string;

  @Column({name: 'can_hire', type: 'tinyint'})
  canHire!: number;

  @Column({name: 'can_fire', type: 'tinyint'})
  canFire!: number;

  @Column({name: 'can_promote', type: 'tinyint'})
  canPromote!: number;

  @Column({name: 'can_demote', type: 'tinyint'})
  canDemote!: number;

  @Column({name: 'is_manager', type: 'tinyint'})
  isManager!: number;

  @Column({name: 'shift_time', type: 'int'})
  shiftTime!: number;

  @Column({name: 'shift_wage', type: 'int'})
  shiftWage!: number;

  @ManyToOne(() => BusinessEntity, business => business.positions)
  @JoinColumn({name: 'business_id'})
  business?: BusinessEntity;

  @OneToMany(() => UserRPStatEntity, userRP => userRP.businessPosition)
  employees?: UserRPStatEntity[];
}
