import {Rank} from '@instinct/interface';
import {EditRankModal} from './rank-modals';
import React, {useEffect, useState} from 'react';
import {rankService, setURL} from '@instinct/frontend';

setURL('admin/users/ranks', <ListRanks />);

export function ListRanks() {
  const [ranks, setRanks] = useState<Rank[]>();
  const [filter, setFilter] = useState('');
  const [counter, setCounter] = useState(1);
  const filteredRanks = ranks?.filter(_ => _.name.includes(filter));

  useEffect(() => {
    setRanks(undefined);
    async function fetchRanks() {
      const rankData = await rankService.getAll();
      setRanks(rankData);
    }

    fetchRanks();
  }, [counter]);

  return (
    <>
      <div className="row mb-2">
        <div className="container" style={{width: '98%'}}>
          <input
            className="form-control"
            placeholder="Filter by..."
            onChange={e => setFilter(e.target.value)}
            value={filter}
          />
          <p>
            <b>{filteredRanks?.length}</b> results
          </p>
        </div>
      </div>
      <div
        className="row"
        style={{overflowY: 'scroll', maxHeight: 600, padding: 10}}
      >
        {ranks === undefined && <i className="fa fa-spin fa-spinner" />}
        {filteredRanks?.map(_ => (
          <div className="col-lg-4" key={_.id}>
            <EditRankModal rank={_} onChanges={() => setCounter(counter + 1)} />
          </div>
        ))}
      </div>
    </>
  );
}
