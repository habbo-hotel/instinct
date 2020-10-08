import './OnlineUsers.scss';
import { User } from 'instinct-interfaces'
import React, { useEffect, useState } from 'react';
import {
  Card,
  Container,
  Column,
  Jumbotron,
  Row,
  Loading,
  UserContainer,
  UserLayout,
  setURL,
  userService
} from 'instinct-frontend';

setURL('community/online', <OnlineUsers />);

export function OnlineUsers() {
  const [ onlineUsers, setOnlineUsers ] = useState<User[]>();
  useEffect(() => {
    async function fetchUsers(): Promise<void> {
      const users = await userService.getOnline();
      setOnlineUsers(users);
    }

    fetchUsers();
  }, []);

  return (
    <UserLayout section="online">
      <Jumbotron title="Online Users">
        <p>Come join the party!</p>
      </Jumbotron>
      <Container>
        <Loading isLoading={onlineUsers === undefined}>
          <Row>
            <Column side="left">
              <div className="members-container">
                {
                  onlineUsers?.map(_ => (
                    <div className="col-lg-6" key={_.id}>
                      <Card header={_.username}>
                        <UserContainer user={_}/>
                      </Card>
                    </div>
                  ))
                }
                {
                  onlineUsers?.length === 0 && (
                    <Card header="Hmmm">
                      <p>It looks like everybody is sleeping!</p>
                    </Card>
                  )
                }
              </div>
            </Column>
          </Row>
        </Loading>
      </Container>
    </UserLayout>
  );
}
