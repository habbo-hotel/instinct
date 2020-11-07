import React from 'react';
import {UsersLayout} from '../UsersLayout';
import {Icon, setURL} from '@instinct-prj/frontend';

setURL('admin/users/beta-codes', <BetaCodes />);

export function BetaCodes() {

  async function createBetaCode() {

  }

  async function deletaBetaCode(id: number) {

  }

  return (
    <UsersLayout>
      <div style={{ padding: 5 }}>
        <h2 className="aside-title">
          <div className="row">
            <div className="col-6">
              <div>Beta Codes</div>
            </div>
            <div className="col-6 text-right">
              <button className="btn btn-success" onClick={createBetaCode}>
                <i className="fa fa-plus-square mr-2" />
                New
              </button>
            </div>
          </div>
        </h2>
        <table className="table">
          <thead>
          <tr>
            <th scope="col">Beta Code</th>
            <th scope="col">Redeemed By</th>
            <th scope="col">&nbsp;</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <th>1</th>
            <td>Mark</td>
            <td>
              <div>
                <Icon className="text-danger" type="trash-alt" />
              </div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </UsersLayout>
  );
}
