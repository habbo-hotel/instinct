import {Link} from 'wouter';
import {Col} from 'reactstrap';
import React, {useContext} from 'react';
import {UserLayout} from '../../components/layout/user';
import {useFetchAllBusinesses} from '../../hooks/business';
import {BusinessCard} from '../../components/templates/business-card';
import {
  Container,
  Icon,
  MiniJumbotron,
  PermissionGuard,
  Row,
  sessionContext,
  setURL,
} from '@instinct-prj/frontend';

setURL('business', <BusinessHub />);

export function BusinessHub() {
  const {user} = useContext(sessionContext);
  const businesses = useFetchAllBusinesses();
  const ownedBusinesses =
    businesses?.filter(_ => _.owner.id === user!.id) ?? [];

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
        {ownedBusinesses.length > 0 && (
          <Row>
            <div className="col-12">
              <MiniJumbotron>
                <h3>My Businesses</h3>
                <div className="row p-2" style={{marginTop: -15}}>
                  {ownedBusinesses.map(_ => (
                    <Link key={_.id} to={`/businesses/${_.id}`}>
                      <div className="d-inline">
                        <img
                          className="business-badge mr-3"
                          src={`/img/corps/${_.badge}.gif`}
                          style={{height: 60, width: 60}}
                        />
                      </div>
                    </Link>
                  ))}
                </div>
              </MiniJumbotron>
            </div>
          </Row>
        )}
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
