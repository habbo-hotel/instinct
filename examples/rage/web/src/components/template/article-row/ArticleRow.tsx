import React from 'react';
import './ArticleRow.scss';
import { Link } from 'react-router-dom';
import { ArticleCardProps } from 'instinct-frontend';

export function ArticleRow({ article }: ArticleCardProps) {
  return (
    <Link className="article-row" style={{ backgroundImage: `url(${article.headerImage})` }} to={`/community/news/${article.id}`}>
      <div className="content-overlay" />
      <div className="content">
        <h2>{article.title}</h2>
      </div>
    </Link>
  );
}
