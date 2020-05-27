import React, { useState } from 'react';
import { Form, Icon, Input, Row } from 'instinct-frontend';
import { defaultEmailPreferencesState, EmailPreferencesState } from './';

export function EmailPreferences() {
  const [ state, setState ] = useState<EmailPreferencesState>(defaultEmailPreferencesState);

  const isDisabled: boolean = state.email === '' || state.showSpinner;

  function updateField<K extends keyof EmailPreferencesState>(key: K, value: EmailPreferencesState[K]): void {
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
        <h4 className="form-subcategory">Email Address</h4>
        <Row>
          <div className="column-2">
            <Input type="email" name="email" value={state.email} onChange={updateField}/>
          </div>
        </Row>
      </div>
      <div className="form-help">
        <p>Your email address is used for password resets, identity verifications and payment receipts..</p>
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