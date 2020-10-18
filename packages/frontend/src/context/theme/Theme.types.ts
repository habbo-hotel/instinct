export interface ThemeContext {
  showClient: boolean;
  showFooter: boolean;
  setStore: (changes: Partial<ThemeContext>) => void;
}

export const defaultThemeContextInterface: ThemeContext = {
  showClient: false,
  showFooter: true,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setStore: (changes: Partial<ThemeContext>) => {},
};
