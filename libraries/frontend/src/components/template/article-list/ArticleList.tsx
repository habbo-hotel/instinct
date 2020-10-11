import React from 'react';
import { useFetchAllArticles } from 'hooks';
import { ArticleCard, Container, Jumbotron, Loading } from 'components';

export function ArticleList() {
  const articles = useFetchAllArticles();

  return (
    <>
      <Jumbotron title="Latest News">
        <p>Stay updated with our latest news!</p>
      </Jumbotron>
      <Container>
        <div className="articles-container">
          <Loading isLoading={articles === undefined}>
            {articles?.length === 0 && (
              <>
                <h3>Hmmm...</h3>
                <p>It looks like there aren't any articles.</p>
              </>
            )}
            {articles?.map((article) => (
              <ArticleCard article={article} key={article.id} />
            ))}
          </Loading>
        </div>
      </Container>
    </>
  );
}
