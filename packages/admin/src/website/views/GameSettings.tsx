import React, {useContext} from 'react';
import {Form, Input, Row} from '@instinct/frontend';
import {websiteSettingsContext} from '../context/WebsiteSettings';

export function GameSettings() {
  const {config, showSpinner, saveChanges, setConfig} = useContext(
    websiteSettingsContext
  );
  return (
    <Form className="" onSubmit={saveChanges}>
      <div style={{padding: 2}}>
        <h4>Habbo SWF</h4>
        <Input
          type="text"
          name="swfHabbo"
          onChange={setConfig}
          value={config.swfHabbo}
        />
      </div>
      <div style={{padding: 2}}>
        <h4>SWF Folder</h4>
        <Input
          type="text"
          name="swfBaseURL"
          onChange={setConfig}
          value={config.swfBaseURL}
        />
      </div>
      <div className="mt-4" style={{padding: 2}}>
        <h4>External Variables</h4>
        <Input
          type="text"
          name="swfExternalVariables"
          onChange={setConfig}
          value={config.swfExternalVariables}
        />
      </div>
      <div className="mt-4" style={{padding: 2}}>
        <h4>External Flash Texts</h4>
        <Input
          type="text"
          name="swfExternalTexts"
          onChange={setConfig}
          value={config.swfExternalTexts}
        />
      </div>
      <div className="mt-4" style={{padding: 2}}>
        <h4>Product Data</h4>
        <Input
          type="text"
          name="swfProductData"
          onChange={setConfig}
          value={config.swfProductData}
        />
      </div>
      <div className="mt-4" style={{padding: 2}}>
        <h4>Furnidata</h4>
        <Input
          type="text"
          name="swfFurniData"
          onChange={setConfig}
          value={config.swfFurniData}
        />
      </div>
      <div className="mt-4" style={{padding: 2}}>
        <h4>Figuredata</h4>
        <Input
          type="text"
          name="swfFigureData"
          onChange={setConfig}
          value={config.swfFigureData}
        />
      </div>
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
