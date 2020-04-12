import Moment from 'moment';
import { Link } from 'react-router-dom';
import { Card, Loading  } from 'components';
import { articleService } from 'app/service';
import { Article } from 'fashionkilla-interfaces';
import React, { useEffect, useState } from 'react';
import { defaultRecentNewsState, RecentNewsState } from './';

export function RecentNews() {
  const [ state, setState ] = useState<RecentNewsState>(defaultRecentNewsState);

  async function fetchArticles(): Promise<void> {
    const articles: Article[] = await articleService.getAll();
    setState({
      articles,
      isLoading: false,
    });
  }

  useEffect(() => {
    setState(defaultRecentNewsState);
    fetchArticles();
  }, []);

  return (
    <Card header="Recent News">
      <Loading isLoading={state.isLoading}>
        <div className="related-articles-container">
          {
            state.articles.map(article => (
              <Link className="related-article-container" key={article.id} to={`/community/news/${article.id}`}>
                <div className="related-article-thumbnail" style={{ backgroundImage: `url(${article.imagePath})` }}/>
                <div className="related-article-details">
                  <div className="related-article-title">
                    {article.title}
                  </div>
                  <div className="related-article-date">
                    {Moment(article.datePosted).format('MMM DD, YYYY')}
                  </div>
                </div>
              </Link>
            ))
          }
        </div>
      </Loading>
    </Card>
  )
}