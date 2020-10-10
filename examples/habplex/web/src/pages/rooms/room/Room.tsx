import './Room.scss';
import { Link, useRoute } from 'wouter';
import { Room } from 'instinct-interfaces';
import { defaultRoomState, RoomState } from './';
import React, { useContext, useEffect, useState } from 'react';
import {
  Card,
  Column,
  Container,
  Jumbotron,
  Loading,
  clientService,
  roomService,
  UserLayout,
  setURL,
  sessionContext,
  themeContext,
  Avatar, UserContainer
} from 'instinct-frontend';

setURL('rooms/:roomID', <RoomPage />);

export function RoomPage() {
  const [ match, params ] = useRoute<{ roomID: string }>('/rooms/:roomID');
  const { online } = useContext(sessionContext);
  const { setStore } = useContext(themeContext)
  const [state, setState] = useState<RoomState>(defaultRoomState);

  useEffect(() => {
    async function fetchRoom(): Promise<void> {
      const room: Room = await roomService.getByID(Number(params!.roomID));
      setState({
        room,
        showSpinner: false,
      });
    }

    setState(defaultRoomState);
    fetchRoom();
  }, [params?.roomID]);

  function enterRoom(): void {
    clientService.enterRoom(state.room!.id);
    setStore({ showClient: true });
  }

  return (
    <UserLayout section="community_rooms">
      <Jumbotron title={state.room?.name}>
        Owned by <Link to={`/profile/${state.room?.user?.username}`}>{state.room?.user?.username}</Link>
      </Jumbotron>
      <Loading isLoading={state.showSpinner}>
        <Container>
          <Column side="left">
            <Card header="Room Information">
              <ul>
                <li>Max Users: <b>{state.room?.maxUsers}</b></li>
                <li>Current Users: <b>{state.room?.currentUsers}</b></li>
              </ul>
              <button className="rounded-button blue plain" disabled={!online} onClick={enterRoom}>Enter Room</button>
            </Card>
          </Column>
          <Column side="right">
            <Card header="Owned By">
              {
                state.room?.user && (
                  <div className="mb-2">
                    <UserContainer user={state.room?.user}/>
                  </div>
                )
              }
            </Card>
          </Column>
        </Container>
      </Loading>
    </UserLayout>
  );
}
