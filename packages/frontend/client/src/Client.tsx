import './Client.scss';
import React, {useEffect, useState} from 'react';
import {initShroom, ShroomEnvironment} from './init-shroom';
import {Avatar, FloorFurniture, Room} from '@jankuss/shroom';

export function Client() {
  const [shroom, setShroom] = useState<ShroomEnvironment>();
  const isReady = shroom?.canvas && shroom?.game && shroom?.pixi;

  useEffect(() => {
    const newShroom = initShroom();
    setShroom(newShroom);
  }, []);

  useEffect(() => {
    if (isReady) {
      const room = Room.create(shroom!.game, {
        tilemap: `
   xxxxx
   x0000
   x0000
   x0000
   `,
      });

      room.x = 100;
      room.y = 200;

      const furni = new FloorFurniture({
        roomX: 0,
        roomY: 0,
        roomZ: 0,
        direction: 4,
        type: 'club_sofa',
      });

      const avatar = new Avatar({
        look: 'hd-180-1.hr-100-61.ch-210-66.lg-280-110.sh-305-62',
        direction: 4,
        roomX: 0,
        roomY: 0,
        roomZ: 0,
      });

      avatar.action = 'sit';

      room.addRoomObject(furni);
      room.addRoomObject(avatar);

      room.onTileClick = position => {
        console.log('Send this probably to a server somewhere', position);
      };

      setTimeout(() => {
        // Small delay here so we can witness the avatar moving.

        avatar.walk(0, 2, 0, {direction: 4});
        avatar.move(1, 2, 0);
      }, 3000);

      shroom.pixi.stage.addChild(room);
    }
  }, [isReady]);

  return (
    <>
      <canvas
        id="game"
        width={1950}
        height={1283}
        style={{touchAction: 'none', cursor: 'inherit'}}
      />
    </>
  );
}
