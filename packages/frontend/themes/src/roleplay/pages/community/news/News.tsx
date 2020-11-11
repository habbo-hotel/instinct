import {uniq} from 'lodash';
import Moment from 'moment';
import {Link} from 'wouter';
import {Article} from '@instinct-prj/interface';
import React, {useContext, useState} from 'react';
import {UserLayout} from '../../../components/layout/user';
import {
  Card,
  configContext,
  MiniJumbotron,
  setURL,
  Row,
  Container,
  useFetchAllArticles,
  Icon,
} from '@instinct-prj/frontend';

type NewsFilter = (article: Article) => boolean;

setURL('community/news', <News />);

export function News() {
  const {config} = useContext(configContext);
  const [name, setName] = useState('');
  const [category, setCategory] = useState<Number>();
  const [filter, setFilter] = useState<{callback: NewsFilter}>({
    callback: (_: Article) => true,
  });
  const articles: Article[] | undefined = useFetchAllArticles();
  const filteredArticles = articles?.filter(filter.callback);

  const categories =
    articles === undefined ? [] : uniq(articles.map(_ => _.category));

  function filterByCategory(categoryID: number) {
    setFilter({
      callback: (_: Article) => _?.category?.id === categoryID,
    });
    setCategory(categoryID);
    setName('');
  }

  function filterByTitle(name: string) {
    setFilter({
      callback: (_: Article) => _?.title.toLowerCase().indexOf(name) > -1,
    });
    setName(name);
    setCategory(undefined);
  }

  return (
    <UserLayout>
      <Container>
        <Row>
          <div className="col-12">
            <MiniJumbotron>
              <h1>{config.siteName} News</h1>
              <p>Check out the latest updates, events and announcements.</p>
            </MiniJumbotron>
          </div>
        </Row>
        <Row>
          <div className="col-12">
            <MiniJumbotron>
              <div className="row">
                <div className="col-6">
                  <input
                    className="form-control"
                    placeholder="Search for an article"
                    value={name}
                    onChange={e => filterByTitle(e.target.value.toLowerCase())}
                  />
                </div>
                <div className="col-6">
                  {categories.map(_ => (
                    <button
                      className="btn ml-2"
                      style={{
                        borderColor: category === _.id ? _.color : '#0F416C',
                        color: _.color,
                      }}
                      onClick={() => filterByCategory(_.id)}
                    >
                      {_.name}
                    </button>
                  ))}
                </div>
              </div>
            </MiniJumbotron>
          </div>
        </Row>
        <Row>
          {filteredArticles?.map(_ => (
            <div className="col-6" key={_.id}>
              <Card style={{borderBottom: `2px solid ${_.category.color}`}}>
                <div className="row p-2">
                  <Link to={`/community/news/${_.id}`}>
                    <img
                      src={_.thumbnailImage}
                      height={120}
                      width={120}
                      style={{borderRadius: 5, cursor: 'pointer'}}
                    />
                  </Link>
                  <div className="ml-4">
                    <Link to={`/community/news/${_.id}`}>
                      <h2 style={{cursor: 'pointer', marginBottom: 0}}>
                        {_.title}
                      </h2>
                    </Link>
                    <p style={{fontSize: 14, marginBottom: 0}}>
                      Posted {Moment(_.datePosted).format('MMMM DD, YYYY')}
                    </p>
                    <p>{_.description}</p>
                  </div>
                </div>
              </Card>
            </div>
          ))}
          {articles &&
            articles?.length ===
              0(
                <div className="col-12">
                  <Card className="text-center">
                    <Icon className="fa-4x" type="exclamation-triangle" />
                    <p>No articles have been posted yet.</p>
                  </Card>
                </div>
              )}
          {articles && articles?.length > 0 && filteredArticles?.length === 0 && (
            <div className="col-12">
              <Card className="text-center">
                <Icon className="fa-4x" type="exclamation-triangle" />
                <p>We couldn't find any articles that fit the criteria!</p>
              </Card>
            </div>
          )}
        </Row>
      </Container>
    </UserLayout>
  );
}
