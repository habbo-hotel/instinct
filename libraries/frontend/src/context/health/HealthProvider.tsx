import React, { PureComponent } from 'react';
import { defaultHealthInterface, HealthContext, HealthTypes, HealthProviderProps } from './index';

export class HealthProvider extends PureComponent<HealthProviderProps> {
  setStore = (changes: Partial<HealthTypes>): void => {
    return this.setState(changes);
  };

  state: HealthTypes = {
    ...defaultHealthInterface,
    setStore: this.setStore,
  };

  render() {
    const { children } = this.props;
    return <HealthContext.Provider value={this.state}>{children}</HealthContext.Provider>;
  }
}
