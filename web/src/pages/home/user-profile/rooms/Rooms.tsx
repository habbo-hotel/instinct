import React from 'react';
import { Card } from 'components';
import { UserProfileWidgetProps } from '../';
import { RoomContainer } from './room-container';

export function Rooms({ profile }: UserProfileWidgetProps) {
  return (
    <Card header="Rooms">
      <div className="items-container">
        {
          profile?.rooms.length === 0 && (
            <p>{profile?.user.username} doesn't own any rooms</p>
          )
        }
        {
          profile?.rooms.map(room => (
            <div className="item-container" key={room.id}>
              <RoomContainer room={room}/>
            </div>
          ))
        }
      </div>
    </Card>
  )
}
