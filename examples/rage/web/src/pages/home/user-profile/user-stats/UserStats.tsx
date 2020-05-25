import React, { ReactNode } from 'react';
import { Card, Icon } from 'instinct-frontend';
import { UserProfileWidgetProps } from '../UserProfile.types';
import { UserStats as UserStatsT } from 'instinct-rp-interfaces';

export function UserStats({ profile }: UserProfileWidgetProps) {

  const killDeathRatio: ReactNode = profile?.stats !== undefined
    ?  profile?.stats?.kills === 0 || profile?.stats.deaths === 0
      ? 0
      : profile.stats.kills / profile.stats.deaths
    :  <Icon className="fa fa-spin" family="fas" type="spinner"/>;

  function renderStat<T extends keyof UserStatsT>(key: T) {
    return profile?.stats[key] !== undefined
      ? profile?.stats[key].toLocaleString()
      : <Icon className="fa fa-spin" family="fas" type="spinner"/>
  }

  return (
    <>
      <Card>
        <h3>My Stats</h3>
        <div className="row">
          <div className="col-4">
            <h4>Kills</h4>
            <p>{renderStat('kills')}</p>
          </div>
          <div className="col-4">
            <h4>Deaths</h4>
            <p>{renderStat('deaths')}</p>
          </div>
          <div className="col-4">
            <h4>Kill/Death Ratio</h4>
            { killDeathRatio }
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-4">
            <h4>Strength Level</h4>
            <p>{renderStat('strength')}</p>
          </div>
          <div className="col-4">
            <h4>Intelligence Level</h4>
            <p>{renderStat('intelligence')}</p>
          </div>
          <div className="col-4">
            <h4>Stamina Level</h4>
            <p>{renderStat('stamina')}</p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-4">
            <h4>Punches Thrown</h4>
            <p>{renderStat('punches')}</p>
          </div>
          <div className="col-4">
            <h4>Arrests Made</h4>
            <p>{renderStat('arrests')}</p>
          </div>
        </div>
      </Card>
    </>
  )
}