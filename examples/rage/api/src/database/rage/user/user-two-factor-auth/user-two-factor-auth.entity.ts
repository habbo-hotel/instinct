import {UserEntity} from '../user/user.entity';
import {Column, CreateDateColumn, JoinColumn, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';

@Entity('users_two_factor_auth')
export class UserTwoFactorAuthEntity {

  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ name: 'users_id', type: 'int' })
  userID!: number;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'users_id' })
  user?: UserEntity;

  @Column({ name: 'one_time_code', type: 'varchar' })
  oneTimeCode!: string;

  @Column({ type: 'varchar' })
  description!: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt?: number;

}