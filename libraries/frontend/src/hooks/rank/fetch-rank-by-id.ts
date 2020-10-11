import { rankService } from 'services';
import { Rank } from 'instinct-interfaces';
import { useEffect, useState } from 'react';

export function useFetchRankByID(rankID: string): Rank | undefined {
  const [rank, setRank] = useState<Rank>();

  useEffect(() => {
    setRank(undefined);
    async function fetchRank() {
      const rankData = await rankService.getByID(rankID);
      setRank(rankData);
    }

    fetchRank();
  }, [rankID]);

  return rank;
}
