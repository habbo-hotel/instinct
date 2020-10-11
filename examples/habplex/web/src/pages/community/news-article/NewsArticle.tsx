import React from 'react';
import './NewsArticle.scss';
import * as Moment from 'moment';
import { useRoute } from 'wouter';
import { Avatar, Card, Container, Column, Jumbotron, Loading, RecentNews, UserLayout, setURL, useFetchArticleByID } from 'instinct-frontend';

setURL('community/news/:articleID', <NewsArticle />);

export function NewsArticle() {
  const [ match, params ] = useRoute<{ articleID: string }>('/community/news/:articleID');
  const article = useFetchArticleByID(params!.articleID);

  return (
    <UserLayout section="article">
      <Loading isLoading={article === undefined}>
        <Jumbotron
          className="text-center"
          title={article?.title ?? ''}
          style={{ backgroundImage: `url('${article?.headerImage}')`, backgroundSize: '100%' }}
        >
          <p>{article?.category.name} - {Moment.unix(article?.datePosted || 0).format('MMMM DD, YYYY')}</p>
        </Jumbotron>
        <Container>
          <Column side="left">
            <Card>
              <div dangerouslySetInnerHTML={{ __html: article?.content ?? '' }} />
              <div className="article-author flex-container flex-vertical-center mt-3">
                <div className="author-image">
                  <Avatar look={article?.author?.figure || ''} headOnly />
                </div>
                <div className="author-details">
                  <div className="author-name">{article?.author?.username}</div>
                  <div className="author-function">{article?.author.rank?.name}</div>
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
