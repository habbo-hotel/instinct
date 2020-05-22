import {ConfigEntity} from './config.entity';
import {Config} from 'instinct-rp-interfaces';

export function configWire(configEntity: ConfigEntity): Config {
  return {
    siteName: configEntity.siteName,
    siteLink: configEntity.siteLink,
    emulatorIP: configEntity.emulatorIP,
    emulatorPort: configEntity.emulatorPort.toString(),
    swfHabbo: configEntity.swfHabbo,
    swfExternalVariables: configEntity.swfExternalVariables,
    swfExternalTexts: configEntity.swfExternalTexts,
    swfProductData: configEntity.swfProductData,
    swfFurniData: configEntity.swfFurniData,
    swfFigureData: configEntity.swfFigureData,
    swfBaseURL: configEntity.swfBaseURL,
    swfBadgeURL: configEntity.swfBadgeURL,
    swfOverrideVariables: configEntity.swfOverrideVariables,
    swfOverrideTexts: configEntity.swfOverrideTexts,
    loadingMessage: configEntity.loadingMessage,
    groupBadgeURL: configEntity.groupBadgeURL,
    googleRecaptchaSiteKey: configEntity.googleRecaptchaSiteKey,
  };
}
