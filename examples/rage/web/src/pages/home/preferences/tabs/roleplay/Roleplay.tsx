import Toggle from 'react-toggle';
import React, { useState } from 'react';
import { Form, Icon, Input, Row } from 'instinct-frontend';
import { defaultRoleplayPreferencesState, RoleplayPreferencesState } from './';

export function RoleplayPreferences() {
  const [ state, setState ] = useState<RoleplayPreferencesState>(defaultRoleplayPreferencesState);

  const isDisabled: boolean = state.showSpinner;

  function updateField<K extends keyof RoleplayPreferencesState>(key: K, value: RoleplayPreferencesState[K]): void {
    setState({
      ...state,
      [key]: value,
    })
  }

  function toggleSpinner(showSpinner: boolean): void {
    setState({
      ...state,
      showSpinner,
    })
  }

  async function onSubmit(): Promise<void> {
    toggleSpinner(true);
    setTimeout(() => {
      toggleSpinner(false);
    }, 1200);
  }

  return (
    <Form className="" onSubmit={onSubmit}>
      <div>
        <h4 className="form-subcategory">Passive Mode</h4>
        <Row>
          <div className="column-2 ml-3 mt-2">
            <Toggle/>
          </div>
        </Row>
      </div>
      <div className="form-help">
        <p>Passive mode disables the ability to receive damage, participate in crime or do damage to others.</p>
      </div>
      <div className="submit-button">
        <button className="rounded-button grey" disabled={isDisabled} type="submit">
          {
            state.showSpinner
              ? <Icon className="fa-spin" type="spinner"/>
              : 'Save'
          }
        </button>
      </div>
    </Form>
  )
}