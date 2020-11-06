import {BusinessEntity} from './business.entity';
import {
  Column,
  Entity,
  JoinColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';

@Entity('roleplay_businesses_ranks')
export class BusinessPositionEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({name: 'business_id', type: 'int', length: 11})
  businessID!: number;

  @Column({name: 'index', type: 'int', length: 11})
  order!: number;

  @Column({type: 'varchar', length: 100})
  name!: string;

  @Column({name: 'outfit_male', type: 'varchar', length: 100})
  maleUniform!: string;

  @Column({name: 'outfit_female', type: 'varchar', length: 100})
  femaleUniform!: string;

  @Column({name: 'can_hire', type: 'tinyint', length: 4})
  canHire!: number;

  @Column({name: 'can_fire', type: 'tinyint', length: 4})
  canFire!: number;

  @Column({name: 'can_promote', type: 'tinyint', length: 4})
  canPromote!: number;

  @Column({name: 'can_demote', type: 'tinyint', length: 4})
  canDemote!: number;

  @Column({name: 'is_manager', type: 'tinyint', length: 4})
  isManager!: number;

  @Column({name: 'shift_time', type: 'int', length: 11})
  shiftTime!: number;

  @Column({name: 'shift_wage', type: 'int', length: 11})
  shiftWage!: number;

  @ManyToOne(() => BusinessEntity)
  @JoinColumn({name: 'business_id'})
  business?: BusinessEntity;
}
