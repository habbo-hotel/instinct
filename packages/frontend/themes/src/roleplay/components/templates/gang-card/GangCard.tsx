import React from 'react';
import {sum} from 'lodash';
import {Link} from 'wouter';
import {GangCardProps} from './GangCard.types';
import {Avatar, Card, Row} from '@instinct-prj/frontend';

export function GangCard({gang}: GangCardProps) {
  return (
    <Link to={`/gangs/${gang.id}`}>
      <div>
        <Card className="business-card">
          <Row>
            <div className="col-6">
              <div className="avatar">
                <Avatar
                  look={gang.owner.figure}
                  direction={2}
                  gesture="sml"
                  size="l"
                />
              </div>
            </div>
            <div className="col-6 text-right">
              <h2
                className="text-uppercase"
                style={{overflow: 'hidden', textOverflow: 'ellipsis'}}
              >
                {gang.name}
              </h2>
              <p style={{marginTop: -10}}>
                {sum(gang.ranks.map(_ => _.users.length)) + 1} Members
              </p>
              <img src={`/img/corps/${gang.badge}.gif`} />
            </div>
          </Row>
        </Card>
      </div>
    </Link>
  );
}
