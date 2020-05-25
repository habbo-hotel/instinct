import React from 'react';
import './ArticleRow.scss';
import { ArticleCardProps } from 'instinct-frontend';

export function ArticleRow({ article }: ArticleCardProps) {
  return (
    <div className="row">
      <div className="col-4">
        <img alt="article thumbnail" src={article.thumbnailImage} height={120}/>
      </div>
      <div className="col-8 text-right">
        <h5>{article.title}</h5>
        <p>{article.description}</p>
      </div>
    </div>
  );
}
