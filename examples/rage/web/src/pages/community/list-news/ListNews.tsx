import './ListNews.scss';
import Moment from 'moment';
import { UserLayout } from 'components';
import { Link } from 'react-router-dom';
import { articleService } from 'app/service';
import { Article } from 'instinct-rp-interfaces';
import React, { useEffect, useState } from 'react';
import { defaultListNewsState, ListNewsState } from './';
import { Card, Column, Container, Jumbotron, Loading, setURL } from 'instinct-frontend';

setURL('community/news', <ListNews/>);

export function ListNews() {
  const [ state, setState ] = useState<ListNewsState>(defaultListNewsState);

  useEffect(() => {
    async function fetchArticles(): Promise<void> {
      const articles: Article[] = await articleService.getAll();
      setState({
        articles,
        showSpinner: false,
      });
    }

    fetchArticles();
  }, []);

  return (
    <UserLayout>
      <Jumbotron title="News and Announcements">
        <p>Come see it ya'll</p>
      </Jumbotron>
      <Loading isLoading={state.showSpinner}>
        <Container>
          <div style={{ float: 'left', width: 500 }}>
            <Card header="Latest Updates">
              {
                state.articles.length === 0 && !state.showSpinner && (
                  <p>No articles have been posted yet.</p>
                )
              }
              {
                state.articles.length > 0 && (
                  <>
                    <p style={{ marginTop: -45 }}>Showing <b>{state.articles.length}</b> articles</p>
                    <div className="article-list">
                      <ul>
                        {
                          state.articles.map(article => (
                            <li key={article.id}>
                              <Link to={`/community/news/${article.id}`}>
                                <div className="row mb-5" style={{ padding: 10 }}>
                                  <div className="col-4">
                                    <img alt="article thumbnail" src={article.thumbnailImage}/>
                                  </div>
                                  <div className="col-8 text-right">
                                    <h4>{article.title}</h4>
                                    <p>{article.description}</p>
                                    <div style={{ position: 'absolute', bottom: 0, right: 15, width: '85%'}}>
                                      <span className="float-left"><b>{Moment.unix(article.datePosted).format('MMM DD, YYYY')}</b></span>
                                      <span className="float-right">Posted by <b>{article.author.username}</b></span>
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </li>
                          ))
                        }
                      </ul>
                    </div>
                  </>
                )
              }
            </Card>
          </div>
          <Column side="right">
            <Card header="About">
              <p>Here you can find the latest updates on announcements, events, hiring and more.</p>
            </Card>
          </Column>
        </Container>
      </Loading>
    </UserLayout>
  )
}