import React from 'react';
import {FormGroup} from 'reactstrap';
import {Icon} from '@instinct-prj/frontend';

export function EmployeesStep() {
  return (
    <>
      <h2>
        <Icon type="users" />
        Employees
      </h2>
      <FormGroup>
        <h3>Positions</h3>
        <p>
          Employees in your organization will assigned a job position. Their
          position sets their uniform, pay and privileges.
        </p>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Position</th>
              <th scope="col">Manager</th>
              <th scope="col">&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cadet</td>
              <td>No</td>
              <td>
                <Icon className="text-danger" type="trash" />
              </td>
            </tr>
            <tr>
              <td>Officer</td>
              <td>No</td>
              <td>
                <Icon className="text-danger" type="trash" />
              </td>
            </tr>
            <tr>
              <td>Deputy</td>
              <td>Yes</td>
              <td>
                <Icon className="text-danger" type="trash" />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="w-100 text-right mb-5">
          <button className="btn btn-outline-info btn-sm">
            <Icon type="plus-circle" />
            Add Position
          </button>
        </div>
      </FormGroup>
    </>
  );
}
