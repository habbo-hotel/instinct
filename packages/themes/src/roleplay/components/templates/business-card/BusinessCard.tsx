import React from 'react';
import {Link} from 'wouter';
import './BusinessCard.scss';
import {Avatar, Card, Row} from '@instinct-prj/frontend';
import {BusinessCardProps} from './BusinessCard.types';

export function BusinessCard({business}: BusinessCardProps) {
  return (
    <Link to={`/businesses/${business.id}`}>
      <div>
        <Card className="business-card">
          <Row>
            <div className="col-6">
              <div className="avatar">
                <Avatar
                  look={business.owner.figure}
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
                {business.name}
              </h2>
              <p style={{marginTop: -10}}>
                Managed by: <b>{business.owner.username}</b>
              </p>
              <img src="https://game.peakrp.com/habbo-imaging/badge/police.gif" />
            </div>
          </Row>
        </Card>
      </div>
    </Link>
  );
}
