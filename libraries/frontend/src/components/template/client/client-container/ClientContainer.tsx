// @ts-ignore this dependency does not support Typescript
import Flash from 'swfobject';
import { ConfigContext } from 'context';
import { sessionService } from 'services';
import React, { useContext, useEffect, useState } from 'react';

export function ClientContainer() {
  const [sso, setSSO] = useState<string>();
  const configContext = useContext(ConfigContext);

  useEffect(() => {
    async function fetchSSO(): Promise<void> {
      const sso: string = await sessionService.createSSO();
      setSSO(sso);
    }

    fetchSSO();
  }, []);

  useEffect(() => {
    function setupGame(): void {
      const variables: Record<string, string> = {
        'connection.info.host': configContext.emulatorIP,
        'connection.info.port': configContext.emulatorPort,
        'url.prefix': configContext.siteLink,
        'site.url': configContext.siteLink,
        'client.reload.url': `${configContext.siteLink}/client`,
        'client.fatal.error.url': `${configContext.siteLink}/client`,
        'client.connection.failed.url': `${configContext.siteLink}/client`,
        'external.variables.txt': configContext.swfExternalVariables,
        'external.texts.txt': configContext.swfExternalTexts,
        'productdata.load.url': configContext.swfProductData,
        'furnidata.load.url': configContext.swfFurniData,
        'external.figurepartlist.txt': configContext.swfFigureData,
        'external.override.variables.txt': `${configContext.swfBaseURL}}/override/variables.txt`,
        'flash.client.url': configContext.swfBaseURL,
        'client.starting.revolving': configContext.loadingMessage,
        'processlog.enabled': '1',
        'use.sso.ticket': '1',
        'sso.ticket': sso!,
        'flash.client.origin': 'popup',
        'client.allow.cross.domain': '1',
        'client.notify.cross.domain': '0',
      };

      const parameters: Record<string, string> = {
        base: configContext.swfBaseURL,
        allowScriptAccess: 'always',
        menu: 'false',
      };

      Flash.embedSWF(configContext.swfHabbo, 'client-area', '100%', '100%', '10.0.0', '', variables, parameters, null);
    }

    if (sso !== undefined) {
      setupGame();
    }
  }, [configContext, sso]);

  return <div id="client-area" />;
}
