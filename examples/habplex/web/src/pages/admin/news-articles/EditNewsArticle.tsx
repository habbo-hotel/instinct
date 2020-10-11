import { useRoute } from 'wouter';
import { Article } from 'instinct-interfaces';
import React, { useEffect, useState } from 'react';
import { articleService, setURL } from 'instinct-frontend';
import { NewsArticleEditor } from './editor/NewsArticleEditor';

setURL('admin/news/:articleID', <EditNewsArticle />);

export function EditNewsArticle() {
  const [ matched, params ] = useRoute<{ articleID: string }>('/admin/news/:articleID');
  const [ article, setArticle ] = useState<Article>();

  useEffect(() => {
    async function fetchArticle() {
      const newsArticle = await articleService.getByID(params!.articleID);
      setArticle(newsArticle);
    }

    fetchArticle();
  }, [params]);

  async function onSave(article: Article) {
    console.log(article);
  }

  if (!article) {
    return <i className="fa fa-spin fa-spinner"/>
  }

  return <NewsArticleEditor defaultArticle={article} onSave={onSave}/>
}