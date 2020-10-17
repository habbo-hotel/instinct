import { Link } from 'wouter';
import './ListNewsArticles.scss';
import { Article } from '@instinct/interface';
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
} from '@instinct/frontend';

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

  const header = (
    <div className="row">
      <div className="col-6">
        <div style={{ marginTop: 8 }}>News Articles</div>
      </div>
      <div className="col-6 text-right">
        <Link to="/admin/news/create">
          <button className="btn btn-primary">
            <i className="fa fa-plus-square mr-2"/>
            New
          </button>
        </Link>
      </div>
    </div>
  )

  return (
    <AdminLayout permission="websiteManageNews">
      <Jumbotron style={{ background: '#263238' }} title="Admin Panel">
        <p>Welcome to the admin panel</p>
      </Jumbotron>
      <Container>
        <Row>
          <Column side="left">
            <Card header={header}>
              {
                articles === undefined && (
                  <i className="fa fa-spinner fa-spin"/>
                )
              }
              {
                articles?.map(_ => (
                  <Link key={_.id} to={`/admin/news/${_.id}`}>
                    <div className="admin-article row mb-2">
                      <div className="col-6">
                        <img alt="article header" src={_.thumbnailImage} height={100}/>
                      </div>
                      <div className="col-6 text-right">
                        <h3>{_.title}</h3>
                      </div>
                    </div>
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