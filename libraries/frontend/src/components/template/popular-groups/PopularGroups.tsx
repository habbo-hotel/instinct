import './PopularGroup.scss';
import { ConfigContext } from 'context';
import { groupService } from 'services';
import { Card, Loading } from 'components';
import { Group } from 'instinct-interfaces';
import React, { useContext, useEffect, useState } from 'react';
import { defaultPopularGroupsState, PopularGroupsState } from './';

export function PopularGroups() {
  const configContext = useContext(ConfigContext);
  const [state, setState] = useState<PopularGroupsState>(defaultPopularGroupsState);

  useEffect(() => {
    async function fetchPopularGroups(): Promise<void> {
      const popularGroups: Group[] = await groupService.getMostPopular();
      setState({
        groups: popularGroups,
        showSpinner: false,
      });
    }

    fetchPopularGroups();
  }, []);

  return (
    <Loading isLoading={state.showSpinner}>
      <Card header="Popular Groups" subHeader="Who do you want to join?">
        {state.groups.map((group) => (
          <div
            className="popular-group"
            style={{ background: `url(${configContext.groupBadgeURL}/${group.badge}.png) 10px no-repeat` }}
            key={group.id}
          >
            <div className="user-count">0</div>
            <div className="name">{group.name}</div>
            <div className="desc">{group.desc}</div>
          </div>
        ))}
      </Card>
    </Loading>
  );
}
