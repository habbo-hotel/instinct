export interface ThemeContext {
  showClient: boolean;
  showFooter: boolean;
  setStore?: (changes: Partial<ThemeContext>) => void;
  toggleClient?: (visible: boolean) => void;
}

export const defaultThemeContextInterface: ThemeContext = {
  showClient: false,
  showFooter: true,
  setStore: undefined,
  toggleClient: undefined,
};
