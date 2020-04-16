import { Link } from 'react-router-dom';
import { roomService } from 'app/service';
import { Card, Loading } from 'components';
import { Room } from 'fashionkilla-interfaces';
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
            {state.rooms.map(room => (
              <tr>
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
                  <b>0</b>
                </td>
                <td style={{ width: 150, paddingLeft: 20 }}>
                  <Link className="button" to={`/rooms/${room.id}`}>
                    Goto room
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
