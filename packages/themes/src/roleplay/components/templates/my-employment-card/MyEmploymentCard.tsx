import React from 'react';
import {Link} from 'wouter';
import './MyEmploymentCard.scss';
import {Card} from '@instinct-prj/frontend';

export function MyEmploymentCard() {
  return (
    <Card>
      <div className="row">
        <div className="col-6" style={{borderRight: '1px solid white'}}>
          <h3>My Job</h3>
          <Link to="/business">
            <div className="row employment-block">
              <img
                src="https://game.peakrp.com/habbo-imaging/badge/armoury.gif"
                style={{height: 60, marginTop: 5}}
              />
              <div className="ml-3">
                <h3 style={{textTransform: 'uppercase', marginTop: 10}}>
                  Armory
                </h3>
                <h6 style={{marginTop: -10}}>Assistant Manager</h6>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-6">
          <div className="ml-3">
            <h3>My Gang</h3>
            <Link to="/gangs">
              <div className="row employment-block">
                <img
                  src="https://www.habborator.org/badges/badges/FR033.gif"
                  style={{height: 60, marginTop: 5}}
                />
                <div style={{marginTop: 10}}>
                  <h3 style={{textTransform: 'uppercase'}}>Turners</h3>
                  <h6 style={{marginTop: -10}}>Soldier</h6>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
}
