import React from 'react';
import './ArticleRow.scss';
import { ArticleCardProps } from 'instinct-frontend';

export function ArticleRow({ article }: ArticleCardProps) {
  return (
    <div className="article-row" style={{ backgroundImage: `url(${article.headerImage})` }}>
      <div className="content-overlay"/>
      <div className="content">
        <h2>{article.title}</h2>
      </div>
    </div>
  );
}
