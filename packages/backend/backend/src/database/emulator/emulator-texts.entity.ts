import {Column, Entity, PrimaryColumn} from 'typeorm';

@Entity('emulator_textss')
export class EmulatorTextsEntity {
  @PrimaryColumn()
  key!: string;

  @Column()
  value!: string;
}
