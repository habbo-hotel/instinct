import React, {useContext} from 'react';
import {FormGroup, InputGroup} from 'reactstrap';
import {Form, Input, Row} from '@instinct-prj/frontend';
import {websiteSettingsContext} from '../context/WebsiteSettings';

export function SitePreferences() {
  const {config, showSpinner, setConfig, saveChanges} = useContext(
    websiteSettingsContext
  );

  return (
    <Form className="" onSubmit={saveChanges}>
      <FormGroup>
        <h4>Site Name</h4>
        <Input
          type="text"
          name="siteName"
          onChange={setConfig}
          value={config.siteName}
        />
      </FormGroup>
      <FormGroup>
        <h4>Site URL</h4>
        <Input
          type="text"
          name="siteLink"
          onChange={setConfig}
          value={config.siteLink}
        />
      </FormGroup>
      <FormGroup>
        <h4>Badge Folder</h4>
        <Input
          type="text"
          name="swfBadgeURL"
          onChange={setConfig}
          value={config.swfBadgeURL}
        />
      </FormGroup>
      <FormGroup>
        <h4>Group Badge Folder</h4>
        <Input
          type="text"
          name="groupBadgeURL"
          onChange={setConfig}
          value={config.groupBadgeURL}
        />
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
