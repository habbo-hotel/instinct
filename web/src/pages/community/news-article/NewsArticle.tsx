import { useParams } from 'react-router';
import React, { useEffect, useState } from 'react';
import { defaultNewsArticleState, NewsArticleParameters, NewsArticleState } from './';
import { Card, Container, Column, Row, Jumbotron, UserLayout, setURL, Loading } from 'components';
import { Article } from 'fashionkilla-interfaces';
import { articleService } from '../../../app/service/article';

setURL('community/news/:articleID', <NewsArticle />);

export function NewsArticle() {
  const { articleID } = useParams<NewsArticleParameters>();
  const [state, setState] = useState<NewsArticleState>(defaultNewsArticleState);

  async function fetchArticle(): Promise<void> {
    const article: Article = await articleService.getByID(articleID);
    setState({
      article,
      showSpinner: false,
    });
  }

  useEffect(() => {
    fetchArticle();
  }, []);

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
          <Row>
            <Column side="left">
              <Card>
                <div>{state.article?.content}</div>
                <div className="article-author flex-container flex-vertical-center mt-3">
                  <div className="author-image">
                    <img src="https://playrise.me/riseweb/images/avatar-frank.png" alt="" />
                  </div>
                  <div className="author-details">
                    <div className="author-name">{state.article?.author?.username}</div>
                    <div className="author-function">Administrator</div>
                  </div>
                </div>
              </Card>
            </Column>
            <Column side="right">
              <Card header="Recent News">
                <p>Coming soon</p>
              </Card>
            </Column>
          </Row>
        </Container>
      </Loading>
    </UserLayout>
  );
}
