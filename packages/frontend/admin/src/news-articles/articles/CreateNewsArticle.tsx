import React from 'react';
import {useLocation} from 'wouter';
import {ArticleDTO} from '@instinct-prj/interface';
import {NewsArticleEditor} from './editor/NewsArticleEditor';
import {articleService, setURL} from '@instinct-prj/frontend';

setURL('admin/news/articles/create', <CreateNewsArticle />);

export function CreateNewsArticle() {
  const [location, setLocation] = useLocation();

  async function onSave(article: ArticleDTO): Promise<void> {
    const newArticle = await articleService.create(article);
    setLocation(`/admin/news/articles/${newArticle.id!}`);
  }

  return <NewsArticleEditor onSave={onSave} />;
}
