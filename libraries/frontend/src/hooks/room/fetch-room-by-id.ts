import { roomService } from 'services';
import { Room } from 'instinct-interfaces';
import { useEffect, useState } from 'react';

export function useFetchRoomByID(roomID: string): Room | undefined {
  const [room, setRoom] = useState<Room>();

  useEffect(() => {
    setRoom(undefined);
    async function fetchRoom() {
      const roomData = await roomService.getByID(roomID);
      setRoom(roomData);
    }

    fetchRoom();
  }, [roomID]);

  return room;
}
