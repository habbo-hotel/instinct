import Moment from 'moment';
import { useParams } from 'react-router-dom';
import { articleService } from 'app/service';
import { Article } from 'instinct-rp-interfaces';
import React, { useEffect, useState } from 'react';
import { BackButton, UserLayout } from 'components';
import { defaultViewArticleState, ViewArticleState } from './';
import { Card, Column, Container, Jumbotron, Loading, setURL } from 'instinct-frontend';

setURL('community/news/:articleID', <ViewArticle />);

export function ViewArticle() {
  const { articleID }: Record<'articleID', string> = useParams();
  const [state, setState] = useState<ViewArticleState>(defaultViewArticleState);

  useEffect(() => {
    setState(defaultViewArticleState);
    async function fetchArticle(): Promise<void> {
      const article: Article = await articleService.getByID(articleID);
      setState({
        article,
        showSpinner: false,
      });
    }

    fetchArticle();
  }, [articleID]);

  return (
    <UserLayout>
      <Jumbotron title={state.article?.title}>
        <p>
          Posted on <b>{Moment(state.article?.datePosted).format('MMMM DD, YYYY hh:mmA')}</b>
        </p>
      </Jumbotron>
      <Loading isLoading={state.showSpinner}>
        <Container>
          <BackButton />
          <Column side="left">
            <Card header={state.article?.description}>{state.article?.content}</Card>
          </Column>
        </Container>
      </Loading>
    </UserLayout>
  );
}
