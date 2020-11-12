import React, {useContext} from 'react';
import {businessEditorContext} from '../../context';
import {
  Icon,
  sessionContext,
  useFetchAllRooms,
  Select,
} from '@instinct-prj/frontend';

export function HomeRoomSelector() {
  const {user} = useContext(sessionContext);
  const rooms = useFetchAllRooms({owner: user!.username});
  const {business, setBusiness} = useContext(businessEditorContext);

  if (!rooms) {
    return <Icon className="fa-spin" type="spinner" />;
  }

  return (
    <Select
      options={rooms}
      value={rooms.find(_ => _.id === business.homeRoom) ?? null}
      getOptionLabel={_ => _.name}
      getOptionValue={_ => _.id as any}
      onChange={(e: any) => setBusiness('homeRoom', e.id)}
    />
  );
}
