import { articleService } from 'services';
import { useEffect, useState } from 'react';
import { Article } from 'instinct-interfaces';

export function useFetchArticleByID(articleID: string): Article | undefined {
  const [article, setArticle] = useState<Article>();

  useEffect(() => {
    setArticle(undefined);
    async function fetchArticle() {
      const newsArticle = await articleService.getByID(articleID);
      setArticle(newsArticle);
    }

    fetchArticle();
  }, [articleID]);

  return article;
}
