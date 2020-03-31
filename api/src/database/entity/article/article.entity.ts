import * as Moment from 'moment';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Article, exampleUser } from 'fashionkilla-interfaces';

export function articleWire(articleEntity: ArticleEntity): Article {
  return {
    id: articleEntity.id!,
    title: articleEntity.title,
    imagePath: articleEntity.imagePath,
    datePosted: Moment(articleEntity.createdAt).unix(),
    description: articleEntity.description,
    content: articleEntity.content,
    author: exampleUser,
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
}
