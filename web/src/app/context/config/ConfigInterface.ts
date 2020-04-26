export interface ConfigInterface {
  siteName: string;
  emulatorIP: string;
  emulatorPort: string;
  siteLink: string;
  swfHabbo: string;
  swfExternalVariables: string;
  swfExternalTexts: string;
  swfProductData: string;
  swfFurniData: string;
  swfFigureData: string;
  swfBaseURL: string;
  swfOverrideVariables: string;
  swfOverrideTexts: string;
  loadingMessage: string;
  setStore: (changes: Partial<ConfigInterface>) => void;
}
