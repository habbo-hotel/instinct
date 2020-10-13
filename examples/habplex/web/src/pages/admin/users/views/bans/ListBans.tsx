import { EditBanModal } from './ban-modals';
import { UserBan } from 'instinct-interfaces';
import { banService } from 'instinct-frontend';
import React, { useEffect, useState } from 'react';

export function ListBans() {
  const [ bans, setBans ] = useState<UserBan[]>();
  const [ filter, setFilter ] = useState('');
  const filteredBans = bans?.filter(_ => _.user.username.includes(filter));

  async function fetchBans() {
    setBans(undefined);
    const banData = await banService.getAll();
    setBans(banData);
  }

  useEffect(() => {
    fetchBans();
  }, []);

  return (
    <>
      <div className="row mb-2">
        <div className="container" style={{ width: '98%' }}>
          <input className="form-control" placeholder="Filter by..." onChange={e => setFilter(e.target.value)} value={filter} />
          <p><b>{filteredBans?.length}</b> results</p>
        </div>
      </div>
      <div className="row" style={{ overflowY: 'scroll', maxHeight: 600, padding: 10 }}>
        {
          bans === undefined && (
            <i className="fa fa-spin fa-spinner"/>
          )
        }
        {
          filteredBans?.map(_ => (
            <div className="col-lg-6" key={_.id}>
              <EditBanModal ban={_} onChange={fetchBans}/>
            </div>
          ))
        }
      </div>
    </>
  )
}