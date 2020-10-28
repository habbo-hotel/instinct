import React from 'react';
import {useLocation} from 'wouter';
import {Article} from '@instinct-prj/interface';
import {articleService, setURL} from '@instinct-prj/frontend';
import {NewsArticleEditor} from './editor/NewsArticleEditor';

setURL('admin/news/create', <CreateNewsArticle />);

export function CreateNewsArticle() {
  const [location, setLocation] = useLocation();

  async function onSave(article: Article): Promise<void> {
    const newArticle = await articleService.create({
      title: article.title,
      header: article.headerImage,
      categoryID: 1,
      shortStory: article.description,
      image: article.thumbnailImage,
    });
    setLocation(`/admin/news/${newArticle.id!}`);
  }

  return <NewsArticleEditor onSave={onSave} />;
}
