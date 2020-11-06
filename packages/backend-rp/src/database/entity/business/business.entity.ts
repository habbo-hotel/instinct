import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity('roleplay_businesses')
export class BusinessEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({type: 'varchar', length: 100})
  name!: string;

  @Column({type: 'int', length: 11})
  balance!: number;

  @Column({name: 'work_room', type: 'int', length: 11})
  workRoom!: number;
}
