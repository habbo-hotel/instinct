import {FormGroup} from 'reactstrap';
import React, {useContext} from 'react';
import {Form, Input, Row} from '@instinct/frontend';
import {websiteSettingsContext} from './context/WebsiteSettings';

export function ServerSettings() {
  const {config, showSpinner, setConfig, saveChanges} = useContext(
    websiteSettingsContext
  );
  return (
    <Form className="" onSubmit={saveChanges}>
      <FormGroup>
        <div className="mt-3" style={{padding: 2}}>
          <h4>Emulator IP</h4>
          <Input
            type="text"
            name="siteName"
            onChange={setConfig}
            value={config.emulatorIP}
          />
        </div>
        <div className="mt-3" style={{padding: 2}}>
          <h4>Emulator Port</h4>
          <Input
            type="text"
            name="siteLink"
            onChange={setConfig}
            value={config.emulatorPort}
          />
        </div>
      </FormGroup>
      <Row className="mt-3">
        <div className="col-6">&nbsp;</div>
        <div className="col-6 text-right">
          <button className="btn btn-primary" disabled={showSpinner}>
            {showSpinner ? <i className="fa fa-spinner fa-spin" /> : 'Save'}
          </button>
        </div>
      </Row>
    </Form>
  );
}
