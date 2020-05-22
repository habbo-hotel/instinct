import { GangEntity } from './gang.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('rp_gangs_ranks')
export class GangRanksEntity {

  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ name: 'gangid', type: 'int' })
  gangID!: number;

  @Column({ name: 'rankid', type: 'int' })
  rankID!: number;

  @Column()
  name!: string;

  @Column({ name: 'pwr_recruit', type: 'int', default: 0 })
  canRecruit!: number;

  @Column({ name: 'pwr_demote', type: 'int', default: 0 })
  canDemote!: number;

  @Column({ name: 'pwr_promote', type: 'int', default: 0 })
  canPromote!: number;

  @Column({ name: 'pwr_kick', type: 'int', default: 0 })
  canKick!: number;

  @Column({ name: 'pwr_alert', type: 'int', default: 0 })
  canAlert!: number;

  @ManyToOne(() => GangEntity, gang => gang.ranks)
  gang?: GangEntity;

}