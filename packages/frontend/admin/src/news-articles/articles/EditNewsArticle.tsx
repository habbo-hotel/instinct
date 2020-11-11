import React from 'react';
import {useRoute} from 'wouter';
import {ArticleDTO} from '@instinct-prj/interface';
import {NewsArticleEditor} from './editor/NewsArticleEditor';
import {
  articleService,
  setURL,
  useFetchArticleByID,
} from '@instinct-prj/frontend';

setURL('admin/news/articles/:articleID', <EditNewsArticle />);

export function EditNewsArticle() {
  const [matched, params] = useRoute<{articleID: string}>(
    '/admin/news/articles/:articleID'
  );
  const article = useFetchArticleByID(params!.articleID);

  async function onSave(article: ArticleDTO) {
    await articleService.updateByID(params!.articleID, article);
  }

  if (!article) {
    return <i className="fa fa-spin fa-spinner" />;
  }

  return <NewsArticleEditor defaultArticle={article} onSave={onSave} />;
}
