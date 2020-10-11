import { useEffect, useState } from 'react';
import { Article } from 'instinct-interfaces';
import { articleService } from 'instinct-frontend';

export function fetchNewsArticles(): Article[] | undefined {
  const [ articles, setArticles ] = useState<Article[]>();

  useEffect(() => {
    async function fetchArticles() {
      const newsArticles = await articleService.getAll();
      setArticles(newsArticles);
    }

    fetchArticles();
  }, []);

  return articles;
}