import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import {MediaEntity} from './media.entity';
import {UserEntity} from '../user/user/user.entity';
import {UserEntityStruct} from '../user/user/user.types';

@Entity('media-references')
@Unique(['profileID', 'mediaID'])
export class MediaReferenceEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({name: 'media_id'})
  mediaID!: number;

  @Column({name: 'user_id'})
  userID!: number;

  @Column({name: 'profile_id'})
  profileID!: number;

  @Column()
  description!: string;

  @ManyToOne(() => MediaEntity, media => media.references)
  @JoinColumn({name: 'media_id'})
  media?: MediaEntity;

  @ManyToOne(() => UserEntity)
  @JoinColumn({name: 'user_id'})
  user?: UserEntityStruct;
}
