import React, {useContext} from 'react';
import {Icon} from '@instinct-prj/frontend';
import {businessEditorContext} from '../../context';

export function JobPositionsTable() {
  const {business, delPosition} = useContext(businessEditorContext);

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Position</th>
            <th scope="col">Wage</th>
            <th scope="col">Manager</th>
            <th scope="col">&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {business.positions.map((_, i) => (
            <tr key={i}>
              <td>{_.name}</td>
              <td>
                ${_.shiftWage}&nbsp;/&nbsp;{_.shiftTime / 60}min
              </td>
              <td>{_.isManager ? 'Yes' : 'No'}</td>
              <td>
                <Icon
                  className="text-danger"
                  type="trash"
                  onClick={() => delPosition(i)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {business.positions.length === 0 && (
        <div className="alert alert-danger">
          <b>You don't have any positions</b>
        </div>
      )}
    </>
  );
}
