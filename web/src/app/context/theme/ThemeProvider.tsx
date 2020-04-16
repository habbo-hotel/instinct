import React, { PureComponent } from 'react';
import { ThemeContextInterface, ThemeContext } from './';

export class ThemeContextProvider extends PureComponent {
  setStore = (changes: Partial<ThemeContextInterface>): void => {
    return this.setState(changes);
  };

  state: ThemeContextInterface = {
    showFooter: true,
    setStore: this.setStore,
  };

  render() {
    const { children } = this.props;
    return <ThemeContext.Provider value={this.state}>{children}</ThemeContext.Provider>;
  }
}
