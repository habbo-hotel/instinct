import React, { useState } from 'react';
import { sessionService } from 'app/service';
import { Form, Icon, Input, ModalOverlay, Row } from 'instinct-frontend';
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
    setState({
      ...state,
      showModal: true,
    })
  }

  async function doUpdate(): Promise<void> {
    toggleSpinner(true);
    await sessionService.updateEmail(state.email, state.password);
    setState(defaultEmailPreferencesState);
  }

  if (state.showSuccess) {
    return (
      <div className="text-center">
        <h4>
          <Icon className="" family="fas" type="thumbs-up"/>
          <br/>
          EmailUpdated
        </h4>
        <p>Your email has been updated.</p>
      </div>
    )
  }


  return (
    <>
      <Form className="" disabled={isDisabled} onSubmit={onSubmit}>
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
            Save
          </button>
        </div>
      </Form>
      <ModalOverlay header="Security Check" isOpen={state.showModal}>
        <Form className="" disabled={state.password === ''} onSubmit={doUpdate}>
          <div>
            <h4 className="form-subcategory">What is your current password?</h4>
            <Row>
              <Input type="password" name="password" value={state.password} onChange={updateField}/>
            </Row>
          </div>
          <div className="submit-button">
            <button className="rounded-button grey" disabled={state.password === ''} type="submit">
              {
                state.showSpinner
                  ? <Icon className="fa-spin" type="spinner"/>
                  : 'Save'
              }
            </button>
          </div>
        </Form>
      </ModalOverlay>
    </>
  )
}