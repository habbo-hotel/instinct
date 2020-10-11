import { Link } from 'wouter';
import React, { useContext } from 'react';
import {
  AdminLayout,
  Card,
  Column,
  configContext,
  Container,
  Jumbotron,
  Row,
  setURL,
  useFetchAllRanks
} from 'instinct-frontend';

setURL('admin/users/ranks', <ListRanks/>);

export function ListRanks() {
  const { config } = useContext(configContext);
  const ranks = useFetchAllRanks();

  return (
    <AdminLayout permission="websiteShowAdminPanel">
      <Jumbotron style={{ background: '#263238' }} title="Admin Panel">
        <p>Welcome to the admin panel</p>
      </Jumbotron>
      <Container>
        <Row>
          <Column side="left">
            <Card header="Permission Groups">
              {
                ranks === undefined && (
                  <i className="fa fa-spin fa-spinner"/>
                )
              }
              {
                ranks?.map(_ => (
                  <Link to={`/admin/users/ranks/${_.id}`}>
                    <div className="admin-article row mb-3" key={_.id} style={{ height: 'auto' }}>
                      <div className="col-2">
                        <img alt="rank badge" src={`${config.swfBadgeURL}/${_.badge}.gif`} />
                      </div>
                      <div className="col-10 text-right">
                        <h2>{_.name}</h2>
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