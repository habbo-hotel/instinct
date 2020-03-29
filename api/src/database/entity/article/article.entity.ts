import * as Moment from 'moment';
import { UserEntity, userWire } from '../';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Article } from 'fashionkilla-interfaces';

export function articleWire(articleEntity: ArticleEntity): Article {
  return {
    id: articleEntity.id!,
    title: articleEntity.title,
    imagePath: articleEntity.imagePath,
    datePosted: Moment(articleEntity.createdAt).unix(),
    description: articleEntity.description,
    content: articleEntity.content,
    author: userWire(articleEntity.author!),
  };
}

@Entity('articles')
export class ArticleEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  title!: string;

  @Column()
  description!: string;

  @Column()
  content!: string;

  @Column({ name: 'image_path' })
  imagePath!: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt?: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt?: Date;

  @Column({ name: 'users_id' })
  userID!: number;

  @ManyToOne(
    () => UserEntity,
    user => user.articles,
  )
  @JoinColumn({ name: 'users_id' })
  author?: UserEntity;
}
