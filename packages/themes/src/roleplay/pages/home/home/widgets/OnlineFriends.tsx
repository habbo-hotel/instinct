import React from 'react';
import {NavTabs, UserContainer} from '@instinct-prj/frontend';
import {exampleUser} from '@instinct-prj/interface';

export function OnlineFriendsCard() {
  return (
    <NavTabs
      tabs={[
        {
          text: (
            <>
              <small style={{fontSize: 12}}>online</small>
              <div style={{marginTop: -10}}>Friends</div>
            </>
          ),
          children: (
            <div
              className="users-container"
              style={{height: 270, overflowY: 'scroll', padding: 10}}
            >
              <UserContainer user={exampleUser} />
              <UserContainer user={exampleUser} />
              <UserContainer user={exampleUser} />
              <UserContainer user={exampleUser} />
              <UserContainer user={exampleUser} />
              <UserContainer user={exampleUser} />
            </div>
          ),
        },
        {
          text: (
            <>
              <small style={{fontSize: 12}}>online</small>
              <div style={{marginTop: -10}}>Gangs</div>
            </>
          ),
          children: (
            <div
              className="users-container"
              style={{height: 270, overflowY: 'scroll', padding: 10}}
            >
              <UserContainer user={exampleUser} />
              <UserContainer user={exampleUser} />
              <UserContainer user={exampleUser} />
              <UserContainer user={exampleUser} />
              <UserContainer user={exampleUser} />
            </div>
          ),
        },
      ]}
    />
  );
}
