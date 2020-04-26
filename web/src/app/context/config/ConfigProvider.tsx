import React, { PureComponent } from 'react';
import { ConfigContext, ConfigProviderProps, ConfigInterface, defaultConfigInterface } from './';

export class ConfigProvider extends PureComponent<ConfigProviderProps> {
  setStore = (changes: Partial<ConfigInterface>): void => {
    return this.setState(changes);
  };

  state: ConfigInterface = {
    ...defaultConfigInterface,
    setStore: this.setStore,
  };

  render() {
    const { children } = this.props;
    return <ConfigContext.Provider value={this.state}>{children}</ConfigContext.Provider>;
  }
}
