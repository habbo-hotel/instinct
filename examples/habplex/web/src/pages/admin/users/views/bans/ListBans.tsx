import React, { useState } from 'react';
import { EditBanModal } from './ban-modals';
import { useFetchAllBans } from 'instinct-frontend';

export function ListBans() {
  const bans = useFetchAllBans();
  const [ filter, setFilter ] = useState('');
  const filteredBans = bans?.filter(_ => _.user.username.includes(filter));

  return (
    <>
      <div className="row mb-2">
        <div className="container" style={{ width: '98%' }}>
          <input className="form-control" placeholder="Filter by..." onChange={e => setFilter(e.target.value)} value={filter} />
          <p><b>{filteredBans?.length}</b> results</p>
        </div>
      </div>
      <div style={{ overflowY: 'scroll', maxHeight: 600, padding: 10 }}>
        {
          bans === undefined && (
            <i className="fa fa-spin fa-spinner"/>
          )
        }
        {
          filteredBans?.map(_ => (
            <EditBanModal ban={_} key={_.id}/>
          ))
        }
      </div>
    </>
  )
}