import React from 'react';
import { useRoute } from 'wouter';
import { Article } from '@instinct/interface';
import { NewsArticleEditor } from './editor/NewsArticleEditor';
import { setURL, useFetchArticleByID } from '@instinct/frontend';

setURL('admin/news/:articleID', <EditNewsArticle />);

export function EditNewsArticle() {
  const [ matched, params ] = useRoute<{ articleID: string }>('/admin/news/:articleID');
  const article = useFetchArticleByID(params!.articleID);

  async function onSave(article: Article) {
    console.log(article);
  }

  if (!article) {
    return <i className="fa fa-spin fa-spinner"/>
  }

  return <NewsArticleEditor defaultArticle={article} onSave={onSave}/>
}