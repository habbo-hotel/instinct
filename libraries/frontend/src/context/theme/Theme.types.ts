export interface ThemeContextInterface {
  showClient: boolean;
  showFooter: boolean;
  setStore?: (changes: Partial<ThemeContextInterface>) => void;
  toggleClient?: (visible: boolean) => void;
}

export const defaultThemeContextInterface: ThemeContextInterface = {
  showClient: false,
  showFooter: true,
  setStore: undefined,
  toggleClient: undefined,
};
