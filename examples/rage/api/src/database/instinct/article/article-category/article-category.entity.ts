import {ArticleEntity} from '../article/article.entity';
import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';

@Entity('website_news_categories')
export class ArticleCategoryEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({type: 'varchar'})
  category!: string;

  @OneToMany(() => ArticleEntity, article => article.categoryID)
  articles?: ArticleEntity[];
}
