export interface ThemeContextInterface {
  showClient: boolean;
  showFooter: boolean;
  showWantedListWidget: boolean;
  showCallForHelpWidget: boolean;
  setStore?: (changes: Partial<ThemeContextInterface>) => void;
  toggleClient?: (visible: boolean) => void;
}

export const defaultThemeContextInterface: ThemeContextInterface = {
  showClient: false,
  showFooter: true,
  showWantedListWidget: false,
  showCallForHelpWidget: false,
  setStore: undefined,
  toggleClient: undefined,
};
