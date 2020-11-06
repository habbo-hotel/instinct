import {ConfigEntity} from './config.entity';
import {Config, ConfigDTO} from '@instinct-prj/interface';

export function configWire(configEntity: ConfigEntity): Config {
  return {
    siteName: configEntity.siteName,
    siteLink: configEntity.siteLink,
    emulatorIP: configEntity.emulatorIP,
    emulatorPort: configEntity.emulatorPort,
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
    googleRecaptchaClientKey: configEntity.googleRecaptchaClientKey,
    websocketEnabled: configEntity.websocketEnabled === 1,
    websocketIP: configEntity.websocketIP,
    websocketPort: configEntity.websocketPort,
  };
}

export function configDTOWire(configEntity: ConfigEntity): ConfigDTO {
  return {
    ...configWire(configEntity),
    sendGridAPIKey: configEntity.sendGridAPIKey,
    sendGridAPISender: configEntity.sendGridAPISender,
    sendGridForgotPasswordTemplate: configEntity.sendGridForgotPasswordTemplate,
    googleRecaptchaSiteKey: configEntity.googleRecaptchaClientKey,
  };
}
