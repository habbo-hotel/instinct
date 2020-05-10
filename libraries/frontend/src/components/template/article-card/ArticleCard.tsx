import React from 'react';
import { ArticleCardProps } from './';
import { Link } from 'react-router-dom';

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <div className="article-container">
      <Link
        className="article-content pixelated"
        to={`/community/news/${article.id}`}
        style={{ backgroundImage: `url('${article.thumbnailImage}')` }}
      >
        <div className="article-header">
          <div className="article-category">{article.category.name}</div>
          <div className="article-separation" style={{ backgroundColor: '#f28600' }} />
          <div className="article-title">{article.title}</div>
        </div>
      </Link>
    </div>
  );
}
