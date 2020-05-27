import React, { useState } from 'react';
import { sessionService } from 'app/service';
import { Form, Icon, Input, Row } from 'instinct-frontend';
import { defaultSecurityPreferencesState, SecurityPreferencesState } from './';

export function SecurityPreferences() {
  const [state, setState] = useState<SecurityPreferencesState>(defaultSecurityPreferencesState);

  const isDisabled: boolean =
    state.currentPassword === '' || state.newPassword === '' || state.newPassword !== state.newPasswordAgain || state.showSpinner;

  function updateField<K extends keyof SecurityPreferencesState>(key: K, value: SecurityPreferencesState[K]): void {
    setState({
      ...state,
      [key]: value,
    });
  }

  function toggleSpinner(showSpinner: boolean): void {
    setState({
      ...state,
      showSpinner,
    });
  }

  async function onSubmit(): Promise<void> {
    toggleSpinner(true);
    await sessionService.updatePassword(state.currentPassword, state.newPassword, state.newPasswordAgain);
    setState({
      ...state,
      showSuccess: true,
    });
  }

  if (state.showSuccess) {
    return (
      <div className="text-center">
        <h4>
          <Icon className="" family="fas" type="thumbs-up" />
          <br />
          Password Updated
        </h4>
        <p>Your password has been updated.</p>
      </div>
    );
  }

  return (
    <Form className="" disabled={isDisabled} onSubmit={onSubmit}>
      <div>
        <h4 className="form-subcategory">Current Password</h4>
        <Row>
          <div className="column-2">
            <Input
              type="password"
              name="currentPassword"
              placeholder="Enter your current password"
              value={state.currentPassword}
              onChange={updateField}
            />
          </div>
        </Row>
      </div>
      <div className="mt-5">
        <h4 className="form-subcategory">New Password</h4>
        <Row>
          <div className="column-2">
            <Input
              type="password"
              name="newPassword"
              placeholder="Enter your new password"
              value={state.newPassword}
              onChange={updateField}
            />
          </div>
          <div className="column-2">
            <Input
              type="password"
              name="newPasswordAgain"
              placeholder="Enter your new password again"
              value={state.newPasswordAgain}
              onChange={updateField}
            />
          </div>
        </Row>
      </div>
      <div className="form-help">
        <p>You must use at least 6 characters. We also recommend you to combine numbers and symbols for strong password protection.</p>
      </div>
      <div className="submit-button">
        <button className="rounded-button grey" disabled={isDisabled} type="submit">
          {state.showSpinner ? <Icon className="fa-spin" type="spinner" /> : 'Save'}
        </button>
      </div>
    </Form>
  );
}
