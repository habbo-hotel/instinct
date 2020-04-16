export interface ThemeContextInterface {
  showFooter: boolean;
  setStore?: (changes: Partial<ThemeContextInterface>) => void;
}

export const defaultThemeContextInterface: ThemeContextInterface = {
  showFooter: true,
  setStore: undefined,
};
