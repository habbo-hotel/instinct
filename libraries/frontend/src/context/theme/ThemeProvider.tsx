import React, { PureComponent } from 'react';
import { ThemeContextInterface, ThemeContext, defaultThemeContextInterface } from './';

export class ThemeContextProvider extends PureComponent {
  setStore = (changes: Partial<ThemeContextInterface>): void => {
    return this.setState(changes);
  };

  state: ThemeContextInterface = {
    ...defaultThemeContextInterface,
    setStore: this.setStore,
    toggleClient: (visible) => this.setStore({ showClient: visible }),
  };

  render() {
    const { children } = this.props;
    return <ThemeContext.Provider value={this.state}>{children}</ThemeContext.Provider>;
  }
}
