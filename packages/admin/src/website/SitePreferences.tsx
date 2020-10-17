import Toggle from 'react-toggle';
import React, {useContext} from 'react';
import {FormGroup, InputGroup} from 'reactstrap';
import {Form, Input, Row} from '@instinct/frontend';
import {websiteSettingsContext} from './context/WebsiteSettings';

export function SitePreferences() {
  const {config, showSpinner, setConfig, saveChanges} = useContext(
    websiteSettingsContext
  );

  return (
    <Form className="" onSubmit={saveChanges}>
      <FormGroup>
        <InputGroup>
          <h4>Site Name</h4>
          <Input
            type="text"
            name="siteName"
            onChange={setConfig}
            value={config.siteName}
          />
        </InputGroup>
        <InputGroup className="mt-4">
          <h4>Site URL</h4>
          <Input
            type="text"
            name="siteLink"
            onChange={setConfig}
            value={config.siteLink}
          />
        </InputGroup>
        <InputGroup className="mt-4">
          <h4>Maintenance Mode</h4>
          <div className="d-block w-100">
            <Toggle checked={false} onChange={() => {}} />
          </div>
        </InputGroup>
      </FormGroup>
      <FormGroup className="mt-5">
        <InputGroup>
          <h4>Badge Folder</h4>
          <Input
            type="text"
            name="swfBadgeURL"
            onChange={setConfig}
            value={config.swfBadgeURL}
          />
        </InputGroup>
        <InputGroup className="mt-4">
          <h4>Group Badge Folder</h4>
          <Input
            type="text"
            name="groupBadgeURL"
            onChange={setConfig}
            value={config.groupBadgeURL}
          />
        </InputGroup>
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
