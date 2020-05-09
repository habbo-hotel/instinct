import {UserEntity, userWire} from '../user';
import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import {Photo} from 'instinct-interfaces-interfaces';

export function photoWire(photoEntity: PhotoEntity): Photo {
  return {
    id: photoEntity.id!,
    userID: photoEntity.userID,
    user: photoEntity.user ? userWire(photoEntity.user) : undefined,
    roomID: photoEntity.roomID,
    imagePath: photoEntity.imagePath,
    createdAt: photoEntity.createdAt,
  };
}

@Entity('camera_web')
export class PhotoEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({name: 'user_id'})
  userID!: number;

  @ManyToOne(() => UserEntity)
  @JoinColumn({name: 'user_id'})
  user?: UserEntity;

  @Column({name: 'room_id'})
  roomID!: number;

  @Column({name: 'url'})
  imagePath!: string;

  @Column({name: 'timestamp'})
  createdAt!: number;
}
