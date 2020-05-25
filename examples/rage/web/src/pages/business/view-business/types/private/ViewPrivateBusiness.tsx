import React from 'react';
import Moment from 'moment';
import { BusinessTypeHandlerProps } from '../../ViewBusiness.types';
import { Avatar, Button, Card, Column, Icon, redirect } from 'instinct-frontend';

export function PrivateBusinessHandler({ business }: BusinessTypeHandlerProps) {
  return (
    <>
      <Column side="left">
        {
          business?.positions?.length === 0 && (
            <Card>
              <h4>
                <Icon family="fas" type="info-circle"/>
                Not Setup
              </h4>
              <p>This business has not been setup by its owner yet.</p>
            </Card>
          )
        }
        {
          business?.positions?.map(position => (
            <Card key={position.id}>
              <h3>{position.name}</h3>
              <p>This position is empty</p>
            </Card>
          ))
        }
      </Column>
      <Column side="right">
        <Card>
          <div className="container">
            <div className="row">
              <div className="col-lg-1">
                <div style={{ fontSize: 36, marginTop: 10 }}>
                  <Icon family="fas" type="user-tie"/>
                </div>
              </div>
              <div className="col text-right">
                <h4>Privately Owned</h4>
                <p>Self funded and operated</p>
              </div>
            </div>
          </div>
        </Card>
        <Card header="Meet the Founder">
          <div className="row">
            <div className="col-4">
              <div style={{ height: 140, overflow: 'hidden', marginTop: -50, marginLeft: -20 }}>
                <Avatar look={business?.owner?.figure} direction={2} gesture="sml" size="l" />
              </div>
            </div>
            <div className="col-8 text-right">
              <h4 style={{ textTransform: 'uppercase' }}>{business?.owner?.username}</h4>
              <Button color="success" style={{ fontSize: 12 }} onClick={() => redirect(`profile/${business?.owner?.username}`)}>View Profile</Button>
            </div>
          </div>
        </Card>
        <Card header="More Information">
          <b>Founded On: </b>
          <br/>
          {Moment(business?.createdAt).format('MMMM DD, YYYY')}
          <br/><br/>

          <b>Total Employees: </b>
          <br/>
          {business?.totalEmployees}
        </Card>
      </Column>
    </>
  )
}
