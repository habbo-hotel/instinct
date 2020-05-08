import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {ArticleEntity} from '../database/entity/article';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(ArticleEntity)
    private readonly articleRepo: Repository<ArticleEntity>
  ) {}

  private readonly eagerRelations: string[] = ['author', 'author.rank', 'category'];

  async create(article: ArticleEntity): Promise<ArticleEntity> {
    const newArticle: ArticleEntity = await this.articleRepo.save(article);
    return this.getByID(newArticle.id!);
  }

  getAll(): Promise<ArticleEntity[]> {
    return this.articleRepo.find({
      relations: this.eagerRelations,
    });
  }

  getByID(articleID: number): Promise<ArticleEntity> {
    return this.articleRepo.findOneOrFail({
      where: {
        id: articleID,
      },
      relations: this.eagerRelations,
    });
  }
}
