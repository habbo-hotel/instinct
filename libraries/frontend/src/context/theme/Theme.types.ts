export interface ThemeContext {
  showClient: boolean;
  showFooter: boolean;
  setStore: (changes: Partial<ThemeContext>) => void;
}

export const defaultThemeContextInterface: ThemeContext = {
  showClient: false,
  showFooter: true,
  setStore: (changes: Partial<ThemeContext>) => {},
};
