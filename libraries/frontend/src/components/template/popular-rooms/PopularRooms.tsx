import { roomService } from 'services';
import { Link } from 'wouter';
import { Room } from 'instinct-interfaces';
import { Card, Loading } from 'components';
import React, { useEffect, useState } from 'react';

import { defaultPopularRoomsState, PopularRoomsState } from './';

export function PopularRooms() {
  const [state, setState] = useState<PopularRoomsState>(defaultPopularRoomsState);

  useEffect(() => {
    async function fetchMostPopular(): Promise<void> {
      const mostPoplarRooms: Room[] = await roomService.getMostPopular();
      setState({
        rooms: mostPoplarRooms,
        showSpinner: false,
      });
    }

    fetchMostPopular();
  }, []);

  return (
    <Loading isLoading={state.showSpinner}>
      <Card header="Popular Rooms">
        <table className="rooms table table-striped">
          <tbody>
            {state.rooms.map((room) => (
              <tr key={room.id}>
                <td style={{ textAlign: 'center' }}>
                  <img src="/img/icons/room/1.gif" />
                </td>
                <td style={{ textAlign: 'justify', wordBreak: 'break-word' }}>
                  {room.name}
                  <br />
                  <i style={{ fontSize: 11, wordBreak: 'break-word' }} />
                </td>
                <td>
                  <img src="/img/icons/room/visitors.gif" />
                  <b style={{ marginLeft: 5 }}>0</b>
                </td>
                <td style={{ width: 150, paddingLeft: 20 }}>
                  <Link className="button" to={`/rooms/${room.id}`}>
                    Visit Room
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </Loading>
  );
}
