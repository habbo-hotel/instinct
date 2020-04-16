import { groupService } from 'app/service';
import { Card, Loading } from 'components';
import { Group } from 'fashionkilla-interfaces';
import React, { useEffect, useState } from 'react';
import { defaultPopularGroupsState, PopularGroupsState } from './';

export function PopularGroups() {
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
  });

  return (
    <Loading isLoading={state.showSpinner}>
      <Card header="Popular Groups" subHeader="Who do you want to join?">
        {state.groups.map(group => (
          <div
            id="popularGroups"
            style={{
              backgroundImage:
                "url('https://images.cosmicproject.online/library/c_images/Badgeparts/generated/b010034s025175s025173s029114.png') 10px 50% no-repeat",
            }}
            key={group.id}
          >
            <div className="countGroupMembers">N/A</div>
            <div className="groupName">{group.name}</div>
            <div className="groupDesc">{group.desc}</div>
          </div>
        ))}
      </Card>
    </Loading>
  );
}
