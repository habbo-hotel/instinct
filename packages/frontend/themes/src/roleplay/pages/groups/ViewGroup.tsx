import React from 'react';
import {useRoute} from 'wouter';
import {Group} from '@instinct-prj/interface';
import {
  Card,
  Column,
  Container,
  Jumbotron,
  setURL,
  useFetchGroupByID,
  UserContainer,
  UserLayout,
} from '@instinct-prj/frontend';

setURL('groups/:groupID', <ViewGroup />);

export function ViewGroup() {
  const [matched, params] = useRoute<{groupID: string}>('/groups/:groupID');
  const group: Group | undefined = useFetchGroupByID(params!.groupID);

  return (
    <UserLayout>
      <Jumbotron title={group?.name} />
      <Container>
        <Column side="left">
          <Card header="Description">
            <p>{group?.desc}</p>
          </Card>
        </Column>
        <Column side="right">
          <Card header="Owner">
            {group?.user === undefined && (
              <i className="fa fa-spin fa-spinner" />
            )}
            {group?.user && <UserContainer user={group?.user} />}
          </Card>
        </Column>
      </Container>
    </UserLayout>
  );
}
