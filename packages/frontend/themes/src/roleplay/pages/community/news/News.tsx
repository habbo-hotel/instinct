import Moment from 'moment';
import {Link} from 'wouter';
import {uniqBy} from 'lodash';
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
    articles === undefined
      ? []
      : uniqBy(
          articles.map(_ => _.category),
          'id'
        );

  function filterByCategory(categoryID: number) {
    setFilter({
      callback:
        category === categoryID
          ? (_: Article) => true
          : (_: Article) => _?.category?.id === categoryID,
    });
    setCategory(category === categoryID ? undefined : categoryID);
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
                      key={_.id}
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
        <div className="row" style={{maxHeight: 500, overflowY: 'scroll'}}>
          {filteredArticles?.map(_ => (
            <div className="col-6 mb-4" key={_.id}>
              <Link to={`/community/news/${_.id}`}>
                <div>
                  <Card
                    style={{
                      borderBottom: `2px solid ${_.category.color}`,
                      cursor: 'pointer',
                    }}
                  >
                    <div className="row p-2">
                      <img
                        src={_.thumbnailImage}
                        height={120}
                        width={120}
                        style={{borderRadius: 5, cursor: 'pointer'}}
                      />
                      <div className="ml-4">
                        <h2 style={{cursor: 'pointer', marginBottom: 0}}>
                          {_.title}
                        </h2>
                        <p style={{fontSize: 14, marginBottom: 0}}>
                          Posted {Moment(_.datePosted).format('MMMM DD, YYYY')}
                        </p>
                        <p>{_.description}</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </Link>
            </div>
          ))}
          {articles && articles?.length === 0 && (
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
        </div>
      </Container>
    </UserLayout>
  );
}
