import './PopularGroup.scss';
import { Link } from 'wouter';
import { configContext } from 'context';
import React, { useContext } from 'react';
import { Card, Loading } from 'components';
import { useFetchPopularGroups } from 'hooks';

export function PopularGroups() {
  const { config } = useContext(configContext);
  const popularGroups = useFetchPopularGroups();

  return (
    <Loading isLoading={popularGroups === undefined}>
      <Card header="Popular Groups" subHeader="Who do you want to join?">
        <div className="mt-2">
          {popularGroups?.length === 0 && popularGroups !== undefined && <p>There aren't any groups yet.</p>}
          {popularGroups?.map((group) => (
            <Link
              className="popular-group"
              key={group.id}
              style={{ backgroundImage: `url(${config.groupBadgeURL}/${group.badge}.png) 10px no-repeat` }}
              to={`/groups/${group.id}`}
            >
              <div className="user-count">0</div>
              <div className="name">{group.name}</div>
              <div className="desc">{group.desc}</div>
            </Link>
          ))}
        </div>
      </Card>
    </Loading>
  );
}
