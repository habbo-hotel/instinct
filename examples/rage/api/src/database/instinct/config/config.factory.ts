import {getRepository} from 'typeorm';
import {ConfigEntity} from './config.entity';

export async function configFactory(changes?: Partial<ConfigEntity>): Promise<ConfigEntity> {
  return getRepository(ConfigEntity).save({
    id: undefined,
    siteName: 'Habbo',
    siteLink: 'http://localhost',
    emulatorIP: '127.0.0.1',
    emulatorPort: 3001,
    swfHabbo: 'http://localhost/swfs/gamedata/habbo.swf',
    swfExternalTexts: 'http://localhost/swfs/gamedata/external_flash_texts.txt',
    swfExternalVariables: 'http://localhost/swfs/gamedata/external_flash_variables.txt',
    swfProductData: 'http://localhost/swfs/gamedata/productdata.txt',
    swfFurniData: 'http://localhost/swfs/gamedata/furnidata.txt',
    swfFigureData: 'http://localhost/swfs/gamedata/figuredata.xml',
    swfBaseURL: 'http://localhost/swfs/game',
    swfBadgeURL: 'http://localhost/swfs/images/album_1584',
    swfOverrideTexts: 'http://localhost/swfs/gamedata/override/external_flash_texts.txt',
    swfOverrideVariables: 'http://localhost/swfs/gamedata/override/external_flash_variables.txt',
    loadingMessage: 'Entering Habbo Hotel',
    groupBadgeURL: 'http://localhost/swfs/images/groups/generated',
    googleRecaptchaSiteKey: '1',
    googleRecaptchaSecretKey: '1',
    ...changes,
  });
}
