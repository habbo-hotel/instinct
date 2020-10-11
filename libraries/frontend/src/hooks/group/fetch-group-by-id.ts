import { groupService } from 'services';
import { Group } from 'instinct-interfaces';
import { useEffect, useState } from 'react';

export function useFetchGroupByID(groupID: string): Group | undefined {
  const [group, setGroup] = useState<Group>();

  useEffect(() => {
    setGroup(undefined);
    async function fetchGroup() {
      const groupData = await groupService.getByID(groupID);
    }

    fetchGroup();
  }, [groupID]);

  return group;
}
