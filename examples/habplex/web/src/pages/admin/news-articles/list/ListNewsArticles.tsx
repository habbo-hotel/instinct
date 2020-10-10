import { Link } from 'wouter';
import { Article } from 'instinct-interfaces';
import React, { useEffect, useState } from 'react';
import {
  AdminLayout,
  articleService,
  Card,
  Column,
  Container,
  Jumbotron,
  Row,
  setURL
} from 'instinct-frontend';

setURL('admin/news', <ListNewsArticles/>);

export function ListNewsArticles() {
  const [ articles, setArticles ] = useState<Article[]>();

  useEffect(() => {
    async function fetchArticles() {
      const newsArticles = await articleService.getAll();
      setArticles(newsArticles);
    }

    fetchArticles();
  }, []);

  return (
    <AdminLayout permission="websiteManageNews">
      <Jumbotron style={{ background: '#263238' }} title="Admin Panel">
        <p>Welcome to the admin panel</p>
      </Jumbotron>
      <Container>
        <Row>
          <Column side="left">
            <Card header="News Articles">
              {
                articles === undefined && (
                  <i className="fa fa-spinner fa-spin"/>
                )
              }
              {
                articles?.map(_ => (
                  <Link key={_.id} to={`/admin/news/${_.id}`}>
                    <h4>{_.title}</h4>
                  </Link>
                ))
              }
            </Card>
          </Column>
        </Row>
      </Container>
    </AdminLayout>
  )

}