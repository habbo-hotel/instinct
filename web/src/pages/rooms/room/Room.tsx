import { useParams } from 'react-router-dom';
import { Room } from 'fashionkilla-interfaces';
import { defaultRoomState, RoomState } from './';
import React, { useEffect, useState } from 'react';
import { clientService, roomService } from 'app/service';
import { Column, Container, Loading, setURL, UserLayout } from 'components';

setURL('rooms/:roomID', <RoomPage />);

export function RoomPage() {
  const { roomID } = useParams<Record<'roomID', string>>();
  const [state, setState] = useState<RoomState>(defaultRoomState);

  useEffect(() => {
    async function fetchRoom(): Promise<void> {
      const room: Room = await roomService.getByID(Number(roomID));
      setState({
        room,
        showSpinner: false,
      });
    }

    setState(defaultRoomState);
    fetchRoom();
  }, [roomID]);

  function enterRoom(): void {
    clientService.enterRoom(state.room!.id);
  }

  return (
    <UserLayout>
      <Loading isLoading={state.showSpinner}>
        <Container>
          <Column side="left">
            <h1>Room {state.room?.name}</h1>
            <button onClick={enterRoom}>Enter Room</button>
          </Column>
        </Container>
      </Loading>
    </UserLayout>
  );
}
