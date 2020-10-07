// @ts-ignore this dependency does not support Typescript
import Flash from 'swfobject';
import { configContext } from 'context';
import { sessionService } from 'services';
import React, { useContext, useEffect, useState } from 'react';

export function ClientContainer() {
  const [sso, setSSO] = useState<string>();
  const configContextC = useContext(configContext);

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
        'connection.info.host': configContextC.emulatorIP,
        'connection.info.port': configContextC.emulatorPort,
        'url.prefix': configContextC.siteLink,
        'site.url': configContextC.siteLink,
        'client.reload.url': `${configContextC.siteLink}/client`,
        'client.fatal.error.url': `${configContextC.siteLink}/client`,
        'client.connection.failed.url': `${configContextC.siteLink}/client`,
        'external.variables.txt': configContextC.swfExternalVariables,
        'external.texts.txt': configContextC.swfExternalTexts,
        'productdata.load.url': configContextC.swfProductData,
        'furnidata.load.url': configContextC.swfFurniData,
        'external.figurepartlist.txt': configContextC.swfFigureData,
        'external.override.variables.txt': `${configContextC.swfBaseURL}}/override/variables.txt`,
        'flash.client.url': configContextC.swfBaseURL,
        'client.starting.revolving': configContextC.loadingMessage,
        'processlog.enabled': '1',
        'use.sso.ticket': '1',
        'sso.ticket': sso!,
        'flash.client.origin': 'popup',
        'client.allow.cross.domain': '1',
        'client.notify.cross.domain': '0',
      };

      const parameters: Record<string, string> = {
        base: configContextC.swfBaseURL,
        allowScriptAccess: 'always',
        menu: 'false',
      };

      Flash.embedSWF(configContextC.swfHabbo, 'client-area', '100%', '100%', '10.0.0', '', variables, parameters, null);
    }

    if (sso !== undefined) {
      setupGame();
    }
  }, [configContext, sso]);

  return <div id="client-area" />;
}
