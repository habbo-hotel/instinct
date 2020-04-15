import './NewsArticle.scss';
import { useParams } from 'react-router';
import { articleService } from 'app/service';
import { Article } from 'fashionkilla-interfaces';
import React, { useEffect, useState } from 'react';
import { defaultNewsArticleState, NewsArticleParameters, NewsArticleState } from './';
import { Card, Container, Column, RecentNews, Jumbotron, UserLayout, setURL, Loading, Avatar } from 'components';

setURL('community/news/:articleID', <NewsArticle />);

export function NewsArticle() {
  const { articleID } = useParams<NewsArticleParameters>();
  const [state, setState] = useState<NewsArticleState>(defaultNewsArticleState);

  useEffect(() => {
    async function fetchArticle(): Promise<void> {
      const article: Article = await articleService.getByID(articleID);
      setState({
        article,
        showSpinner: false,
      });
    }
    setState(defaultNewsArticleState);
    fetchArticle();
  }, [articleID]);

  return (
    <UserLayout section="article">
      <Loading isLoading={state.showSpinner}>
        <Jumbotron
          className="text-center"
          title={state.article?.title ?? ''}
          style={{ backgroundImage: `url('${state.article?.imagePath}')`, backgroundSize: '100%' }}
        >
          <p>Campaigns & Activities - Feb 2, 2020</p>
        </Jumbotron>
        <Container>
          <Column side="left">
            <Card>
              <div dangerouslySetInnerHTML={{ __html: state.article?.content ?? '' }} />
              <div className="article-author flex-container flex-vertical-center mt-3">
                <div className="author-image">
                  <Avatar look={state.article?.author?.figure} headOnly />
                </div>
                <div className="author-details">
                  <div className="author-name">{state.article?.author?.username}</div>
                  <div className="author-function">{state.article?.author.rank?.name}</div>
                </div>
              </div>
            </Card>
          </Column>
          <Column side="right">
            <RecentNews />
          </Column>
        </Container>
      </Loading>
    </UserLayout>
  );
}
