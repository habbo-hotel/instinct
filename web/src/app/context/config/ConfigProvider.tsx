import React, { PureComponent } from 'react';
import { ConfigContext, ConfigProviderProps, ConfigInterface } from './';

export class ConfigProvider extends PureComponent<ConfigProviderProps> {
  setStore = (changes: Partial<ConfigInterface>): void => {
    return this.setState(changes);
  };

  state: ConfigInterface = {
    siteName: 'Habbo',
    emulatorIP: '127.0.0.1',
    emulatorPort: '3002',
    siteLink: 'http://localhost:3000',
    swfHabbo: 'http://localhost:3000/swfs/gamedata/habbo.swf',
    swfExternalVariables: 'http://localhost:3000/swfs/gamedata/variables.txt',
    swfExternalTexts: 'http://localhost:3000/swfs/gamedata/texts.txt',
    swfProductData: 'http://localhost:3000/swfs/gamedata/productdata.txt',
    swfFurniData: 'http://localhost:3000/swfs/gamedata/furnidata.xml',
    swfFigureData: 'http://localhost:3000/swfs/gamedata/figuredata.xml',
    swfBaseURL: 'http://localhost:3000/swfs/other/game/',
    swfOverrideVariables: 'http://localhost:3000/swfs/gamedata/override/variables.txt',
    swfOverrideTexts: 'http://localhost:3000/swfs/gamedata/override/texts.txt',
    loadingMessage: 'Please wait as I do some things',
    setStore: this.setStore,
  };

  render() {
    const { children } = this.props;
    return <ConfigContext.Provider value={this.state}>{children}</ConfigContext.Provider>;
  }
}
