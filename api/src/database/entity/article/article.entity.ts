import { Article } from 'instinct-interfaces';
import { UserEntity, userWire } from '../user';
import { ArticleCategoryEntity } from './article-category.entity';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

export enum ArticleForm {
  None = 'none',
  Photo = 'photo',
  Badge = 'badge',
  Look = 'look',
  Word = 'word',
}

export enum ArticleVisibility {
  Show = '1',
  Hidden = '0',
}

export function articleWire(articleEntity: ArticleEntity): Article {
  return {
    id: articleEntity.id!,
    title: articleEntity.title,
    imagePath: articleEntity.image,
    datePosted: articleEntity.timestamp,
    description: articleEntity.shortStory,
    content: articleEntity.fullStory,
    author: userWire(articleEntity.author!),
  };
}

@Entity('website_news')
export class ArticleEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  slug?: string;

  @Column()
  title!: string;

  @Column({ name: 'short_story' })
  shortStory!: string;

  @Column({ name: 'full_story' })
  fullStory!: string;

  @Column()
  header!: string;

  @Column({ name: 'category' })
  categoryID!: number;

  @ManyToOne(() => ArticleCategoryEntity, category => category.articles)
  category?: ArticleCategoryEntity;

  @Column({ type: 'enum' })
  form!: ArticleForm;

  @Column({ type: 'enum' })
  hidden!: ArticleVisibility;

  @Column({ name: 'images' })
  image!: string;

  @CreateDateColumn({ name: 'timestamp', type: 'int' })
  timestamp!: number;

  @Column({ name: 'author' })
  userID!: number;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'author' })
  author?: UserEntity;
}
