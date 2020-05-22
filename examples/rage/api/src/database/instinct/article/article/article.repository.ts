import {ArticleEntity} from './article.entity';
import {EntityRepository, Repository} from 'typeorm';

@EntityRepository(ArticleEntity)
export class ArticleRepository extends Repository<ArticleEntity> {
  readonly eagerRelations: string[] = ['author', 'author.rank', 'category'];

  async createAndReturn(article: ArticleEntity): Promise<ArticleEntity> {
    const newArticle: ArticleEntity = await this.save(article);
    return this.findOneByIDOrFail(newArticle.id!);
  }

  getAll(): Promise<ArticleEntity[]> {
    return this.find({
      relations: this.eagerRelations,
    });
  }

  findOneByIDOrFail(articleID: number): Promise<ArticleEntity> {
    return this.findOneOrFail({
      where: {
        id: articleID,
      },
      relations: this.eagerRelations,
    });
  }
}
