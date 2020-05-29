export interface ThemeContextInterface {
  showClient: boolean;
  showFooter: boolean;
  showWantedListWidget: boolean;
  showCallForHelpWidget: boolean;
  showBusinessWidget: boolean;
  showMapWidget: boolean;
  setStore?: (changes: Partial<ThemeContextInterface>) => void;
  toggleClient?: (visible: boolean) => void;
}

export const defaultThemeContextInterface: ThemeContextInterface = {
  showClient: false,
  showFooter: true,
  showWantedListWidget: false,
  showCallForHelpWidget: false,
  showBusinessWidget: false,
  showMapWidget: false,
  setStore: undefined,
  toggleClient: undefined,
};
