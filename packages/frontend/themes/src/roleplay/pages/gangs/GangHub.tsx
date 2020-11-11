import React from 'react';
import {Link} from 'wouter';
import {useFetchAllGangs} from '../../hooks/gang';
import {UserLayout} from '../../components/layout/user';
import {
  Card,
  Container,
  Row,
  setURL,
  MiniJumbotron,
  PermissionGuard,
  Icon,
} from '@instinct-prj/frontend';

setURL('gangs', <GangHub />);

export function GangHub() {
  const gangs = useFetchAllGangs();
  return (
    <UserLayout section="community_team">
      <Container>
        <Row>
          <div className="col-12">
            <MiniJumbotron>
              <div className="row">
                <div className="col-6">
                  <h1>Gangs</h1>
                  <p>Can you survive the criminal underworld?</p>
                </div>
                <div className="col-6 text-right">
                  <PermissionGuard
                    permission="websiteCreateBusiness"
                    redirect={false}
                  >
                    <Link to="/gangs/creator">
                      <button className="btn btn-success btn-lg">
                        <Icon type="plus-circle" />
                        Form Gang
                      </button>
                    </Link>
                  </PermissionGuard>
                </div>
              </div>
            </MiniJumbotron>
          </div>
        </Row>
        {gangs?.length === 0 && (
          <Row>
            <div className="col-12">
              <Card className="text-center">
                <i className="fa fa-exclamation-circle fa-5x" />
                <h3>There aren't any gangs to show at this time.</h3>
              </Card>
            </div>
          </Row>
        )}
      </Container>
    </UserLayout>
  );
}
