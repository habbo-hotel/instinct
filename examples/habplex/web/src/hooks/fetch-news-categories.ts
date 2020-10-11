import{ useEffect, useState } from 'react';
import { articleService } from 'instinct-frontend';
import { ArticleCategory } from 'instinct-interfaces';

export function fetchNewsCategories(): ArticleCategory[] | undefined {
  const [ categories, setCategories ] = useState<ArticleCategory[]>();

  useEffect(() => {
    async function fetchCategories() {
      const newsCategories = await articleService.getAll();
      setCategories(newsCategories);
    }

    fetchCategories();
  }, []);

  return categories;
}