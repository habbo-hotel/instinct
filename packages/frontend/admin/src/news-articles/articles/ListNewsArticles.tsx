import {Link} from 'wouter';
import './ListNewsArticles.scss';
import {toast} from 'react-toastify';
import {Article} from '@instinct-prj/interface';
import React, {useEffect, useState} from 'react';
import {articleService, Icon, setURL} from '@instinct-prj/frontend';
import {NewsArticleLayout} from '../NewsArticlesLayout';

setURL('admin/news/articles', <ListNewsArticles />);

export function ListNewsArticles() {
  const [articles, setArticles] = useState<Article[]>();

  useEffect(() => {
    fetchArticles();
  }, []);

  async function fetchArticles() {
    setArticles(undefined);
    const newsArticles = await articleService.getAll();
    setArticles(newsArticles);
  }

  async function deleteArticle(articleID: number) {
    await articleService.deleteByID(articleID);
    fetchArticles();
    toast.success('Article has been deleted');
  }

  return (
    <NewsArticleLayout>
      <div className="row">
        <div className="col-6">
          <h2 style={{marginTop: 8}}>News Articles</h2>
        </div>
        <div className="col-6 text-right">
          <Link to="/admin/news/articles/create">
            <button className="btn btn-primary mt-2">
              <i className="fa fa-plus-square mr-2" />
              New
            </button>
          </Link>
        </div>
      </div>
      {articles === undefined && <i className="fa fa-spinner fa-spin" />}
      {articles?.map(_ => (
        <div className="admin-article row mb-2" key={_.id}>
          <div className="col-6">
            <Link to={`/admin/news/articles/${_.id}`}>
              <img alt="article header" src={_.thumbnailImage} height={100} />
            </Link>
          </div>
          <div className="col-6 text-right">
            <Link to={`/admin/news/articles/${_.id}`}>
              <h3>{_.title}</h3>
            </Link>
            <div
              onClick={() => deleteArticle(_.id)}
              style={{cursor: 'pointer'}}
            >
              <Icon className="text-danger" type="trash" />
            </div>
          </div>
        </div>
      ))}
    </NewsArticleLayout>
  );
}
