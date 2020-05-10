import React, { PureComponent } from 'react';
import { ConfigContext, ConfigProviderProps, ConfigTypes, defaultConfigInterface } from './';

export class ConfigProvider extends PureComponent<ConfigProviderProps> {
  setStore = (changes: Partial<ConfigTypes>): void => {
    return this.setState(changes);
  };

  state: ConfigTypes = {
    ...defaultConfigInterface,
    setStore: this.setStore,
  };

  render() {
    const { children } = this.props;
    return <ConfigContext.Provider value={this.state}>{children}</ConfigContext.Provider>;
  }
}
