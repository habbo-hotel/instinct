import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity('rp_weapons')
export class WeaponEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({type: 'varchar', length: 200})
  name!: string;

  @Column({name: 'wp_min_damage', type: 'int'})
  minDamage!: number;

  @Column({name: 'wp_max_damage', type: 'int'})
  maxDamage!: number;

  @Column({name: 'wp_range', type: 'int'})
  range!: number;

  @Column({name: 'wp_spread', type: 'int'})
  spread!: number;

  @Column({name: 'wp_price', type: 'int'})
  price!: number;

  @Column({name: 'wp_reload_time', type: 'int'})
  reloadTime!: number;

  @Column({name: 'wp_need_energy', type: 'int'})
  minEnergy!: number;

  @Column({name: 'wp_need_str', type: 'int'})
  minStrength!: number;

  @Column({name: 'wp_effectid', type: 'int'})
  effectID!: number;

  @Column({name: 'wp_units', type: 'int'})
  totalStock!: number;
}
