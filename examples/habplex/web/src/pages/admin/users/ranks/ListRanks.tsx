import React from 'react';
import {
  AdminLayout,
  Card,
  Column,
  Container,
  Jumbotron,
  Row,
  setURL,
  useFetchAllRanks
} from 'instinct-frontend';
import { CreateRankModal, EditRankModal } from './modal';

setURL('admin/users/ranks', <ListRanks/>);

export function ListRanks() {
  const ranks = useFetchAllRanks();

  const header = (
    <div className="row">
      <div className="col-6">Permission Groups</div>
      <div className="col-6 text-right">
      </div>
    </div>
  )

  return (
    <AdminLayout permission="websiteShowAdminPanel">
      <Jumbotron style={{ background: '#263238' }} title="Admin Panel">
        <p>Welcome to the admin panel</p>
      </Jumbotron>
      <Container>
        <Row>
          <Column side="left">
            <Card header={header}>
              <div style={{ overflowY: 'scroll', maxHeight: 600, padding: 10 }}>
                {
                  ranks === undefined && (
                    <i className="fa fa-spin fa-spinner"/>
                  )
                }
                {
                  ranks?.map(_ => (
                    <EditRankModal key={_.id} rank={_}/>
                  ))
                }
              </div>
            </Card>
          </Column>
        </Row>
      </Container>
    </AdminLayout>
  )
}