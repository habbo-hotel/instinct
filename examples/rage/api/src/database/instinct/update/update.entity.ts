import { UserEntity } from '../../rage/user/user/user.entity';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('website_updates')
export class UpdateEntity {

  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ name: 'user_id', type: 'int' })
  userID!: number;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'user_id' })
  user?: UserEntity;

  @Column({ type: 'varchar' })
  title!: string;

  @Column({ type: 'text'})
  content!: string;

  @CreateDateColumn({ name: 'timestamp', type: 'timestamp' })
  timestamp!: Date;

}