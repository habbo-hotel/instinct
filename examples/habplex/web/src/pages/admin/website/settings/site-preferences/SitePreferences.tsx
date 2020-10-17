import Toggle from 'react-toggle';
import React, {useEffect, useState} from 'react';
import {Config} from 'instinct-interfaces';
import {useFetchConfig} from 'hooks/fetch-config';
import {Form, Input, Row} from 'instinct-frontend';
import {defaultSitePreferencesState, SitePreferencesState} from './SitePreferences.types';

export function SitePreferences() {
  const defaultConfig = useFetchConfig();
  const [state, setState] = useState<SitePreferencesState>({...defaultSitePreferencesState});

  useEffect(() => {
    if (defaultConfig !== undefined) {
      console.log('poo')
      setState(_ => ({
        ..._,
        config: defaultConfig,
      }));
    }
  }, [defaultConfig]);

  function setConfigValue<K extends keyof Config>(key: K, value: Config[K]): void {
    setState(_ => ({
      ..._,
      config: {
        ..._.config,
        [key]: value,
      },
    }));
  }

  async function onSubmit() {

  }

  if (defaultConfig === undefined) {
    return (
      <i className="fa fa-spinner fa-spin" />
    )
  }

  return (
    <Form className="" onSubmit={onSubmit}>
      <div className="mt-3" style={{ padding: 2 }}>
        <h4>Site Name</h4>
        <Input type="text" name="siteName" onChange={setConfigValue} value={state.config.siteName }/>
      </div>
      <div className="mt-3" style={{ padding: 2 }}>
        <h4>Site URL</h4>
        <Input type="text" name="siteLink" onChange={setConfigValue} value={state.config.siteLink }/>
      </div>
      <div className="mt-3" style={{ padding: 2 }}>
        <h4>Maintenance Mode</h4>
        <Toggle checked={false} onChange={() => {}}/>
      </div>
      <Row className="mt-3">
        <div className="col-6">&nbsp;</div>
        <div className="col-6 text-right">
          <button className="btn btn-primary" disabled={state.showSpinner}>
            {
              state.showSpinner
                ? <i className="fa fa-spinner fa-spin" />
                : 'Save'
            }
          </button>
        </div>
      </Row>
    </Form>
  )
}