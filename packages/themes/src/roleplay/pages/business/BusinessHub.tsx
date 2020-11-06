import React from 'react';
import {Link} from 'wouter';
import {Col} from 'reactstrap';
import {UserLayout} from '../../components/layout/user';
import {useFetchAllBusinesses} from '../../hooks/business';
import {BusinessCard} from '../../components/templates/business-card';
import {
  Container,
  Icon,
  MiniJumbotron,
  PermissionGuard,
  Row,
  setURL,
} from '@instinct-prj/frontend';

setURL('business', <BusinessHub />);

export function BusinessHub() {
  const businesses = useFetchAllBusinesses();
  return (
    <UserLayout>
      <Container>
        <Row>
          <div className="col-12">
            <MiniJumbotron>
              <div className="row">
                <div className="col-6">
                  <h1>Business Hub</h1>
                  <p>Elevate your career to the next level</p>
                </div>
                <div className="col-6 text-right">
                  <PermissionGuard
                    permission="websiteCreateBusiness"
                    redirect={false}
                  >
                    <Link to="/business/creator">
                      <button className="btn btn-success btn-lg">
                        <Icon type="plus-circle" />
                        Create A Business
                      </button>
                    </Link>
                  </PermissionGuard>
                </div>
              </div>
            </MiniJumbotron>
          </div>
        </Row>
        <Row>
          {businesses?.map(_ => (
            <Col key={_.id} xs={6}>
              <BusinessCard business={_} />
            </Col>
          ))}
        </Row>
      </Container>
    </UserLayout>
  );
}
