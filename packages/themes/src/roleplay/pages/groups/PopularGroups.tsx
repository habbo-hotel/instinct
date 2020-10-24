import React from 'react';
import {Group} from '@instinct/interface';
import {UserLayout} from '../../components/layout/user';
import {
  Card,
  Column,
  Container,
  Jumbotron,
  setURL,
  useFetchPopularGroups,
} from '@instinct/frontend';

setURL('groups', <PopularGroups />);

export function PopularGroups() {
  const popularGroups: Group[] | undefined = useFetchPopularGroups();

  return (
    <UserLayout>
      <Jumbotron title="Popular Groups" />
      <Container>
        <Column side="left">
          <Card>
            {popularGroups?.length === 0 && (
              <>
                <h4>Hmm,</h4>
                <p>There aren't any groups created yet!</p>
              </>
            )}
            {popularGroups?.map(_ => (
              <div key={_.id}>{_.name}</div>
            ))}
          </Card>
        </Column>
      </Container>
    </UserLayout>
  );
}
