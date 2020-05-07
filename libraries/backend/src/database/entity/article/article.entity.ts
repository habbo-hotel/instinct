import { UserEntity } from '../user';
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

@Entity('website_news')
export class ArticleEntity {
  @PrimaryGeneratedColumn()
  id?: number;

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

  @ManyToOne(
    () => ArticleCategoryEntity,
    category => category.articles
  )
  @JoinColumn({ name: 'category' })
  category?: ArticleCategoryEntity;

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
