import './PopularGroup.scss';
import { configContext } from 'context';
import { groupService } from 'services';
import { Card, Loading } from 'components';
import { Group } from 'instinct-interfaces';
import React, { useContext, useEffect, useState } from 'react';
import { defaultPopularGroupsState, PopularGroupsState } from './';

export function PopularGroups() {
  const { config } = useContext(configContext);
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
        <div className="mt-2">
          {state.groups.length === 0 && !state.showSpinner && <p>There aren't any groups yet.</p>}
          {state.groups.map((group) => (
            <div
              className="popular-group"
              style={{ backgroundImage: `url(${config.groupBadgeURL}/${group.badge}.png) 10px no-repeat` }}
              key={group.id}
            >
              <div className="user-count">0</div>
              <div className="name">{group.name}</div>
              <div className="desc">{group.desc}</div>
            </div>
          ))}
        </div>
      </Card>
    </Loading>
  );
}
