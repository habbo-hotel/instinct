import { createContext } from 'react';
import { ConfigInterface } from './ConfigInterface';

export const ConfigContext = createContext<ConfigInterface>({
  siteName: 'Habbo',
  emulatorIP: '127.0.0.1',
  emulatorPort: '30001',
  siteLink: 'http://localhost:3001',
  swfHabbo: 'http://localhost:3000/swfs/gamedata/habbo.swf',
  swfExternalVariables: 'http://localhost:3000/swfs/gamedata/variables.txt',
  swfExternalTexts: 'http://localhost:3000/swfs/gamedata/texts.txt',
  swfProductData: 'http://localhost:3000/swfs/gamedata/productdata.txt',
  swfFurniData: 'http://localhost:3000/swfs/gamedata/furnidata.xml',
  swfFigureData: 'http://localhost:3000/swfs/gamedata/figuredata.xml',
  swfBaseURL: 'http://localhost:3000/swfs/other/',
  swfOverrideVariables: 'http://localhost:3000/swfs/gamedata/override/variables.txt',
  swfOverrideTexts: 'http://localhost:3000/swfs/gamedata/override/texts.txt',
  loadingMessage: 'Please wait as I do some things',
  setStore: () => {},
});
