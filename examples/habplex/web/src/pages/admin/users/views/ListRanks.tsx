import React, { useState } from 'react';
import { EditRankModal } from './rank-modals';
import { setURL, useFetchAllRanks } from 'instinct-frontend';

setURL('admin/users/ranks', <ListRanks/>);

export function ListRanks() {
  const ranks = useFetchAllRanks();
  const [ filter, setFilter ] = useState('');

  const filteredRanks = ranks?.filter(_ => _.name.includes(filter));

  return (
    <>
      <div className="row mb-2">
        <div className="container" style={{ width: '98%' }}>
          <input className="form-control" placeholder="Filter by..." onChange={e => setFilter(e.target.value)} value={filter} />
          <p><b>{filteredRanks?.length}</b> results</p>
        </div>
      </div>
      <div style={{ overflowY: 'scroll', maxHeight: 600, padding: 10 }}>
        {
          ranks === undefined && (
            <i className="fa fa-spin fa-spinner"/>
          )
        }
        {
          filteredRanks?.map(_ => (
            <EditRankModal key={_.id} rank={_}/>
          ))
        }
      </div>
    </>
  )
}