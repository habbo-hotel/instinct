export interface ConfigDTO {
  siteName: string;
  siteLink: string;
  emulatorIP: string;
  emulatorPort: string;
  swfAdminHabbo: string;
  swfHabbo: string;
  swfExternalVariables: string;
  swfExternalTexts: string;
  swfProductData: string;
  swfFurniData: string;
  swfFigureData: string;
  swfBaseURL: string;
  swfBadgeURL: string;
  swfOverrideVariables: string;
  swfOverrideTexts: string;
  loadingMessage: string;
  groupBadgeURL: string;
  sendGridAPIKey: string;
  sendGridAPISender: string;
  sendGridForgotPasswordTemplate: string;
  googleRecaptchaClientKey: string;
  websocketEnabled: boolean;
  websocketIP: string;
  websocketPort: string;
}

export const exampleConfigDTO: ConfigDTO = {
  siteName: 'Habbo',
  emulatorIP: '127.0.0.1',
  emulatorPort: '3002',
  siteLink: 'http://localhost:3000',
  swfAdminHabbo: 'http://localhost:3000/swfs/gamedata/habbo.swf',
  swfHabbo: 'http://localhost:3000/swfs/gamedata/habbo.swf',
  swfExternalVariables: 'http://localhost:3000/swfs/gamedata/variables.txt',
  swfExternalTexts: 'http://localhost:3000/swfs/gamedata/texts.txt',
  swfProductData: 'http://localhost:3000/swfs/gamedata/productdata.txt',
  swfFurniData: 'http://localhost:3000/swfs/gamedata/furnidata.xml',
  swfFigureData: 'http://localhost:3000/swfs/gamedata/figuredata.xml',
  swfBaseURL: 'http://localhost:3000/swfs/other/game/',
  swfBadgeURL: 'http://localhost:3000/swfs/other/images/album1584',
  swfOverrideVariables:
    'http://localhost:3000/swfs/gamedata/override/variables.txt',
  swfOverrideTexts: 'http://localhost:3000/swfs/gamedata/override/texts.txt',
  loadingMessage: 'Please wait as I do some things',
  groupBadgeURL: 'http://localhost:3000/swfs/other/images/Badgeparts/generated',
  sendGridAPIKey: '',
  sendGridAPISender: '',
  sendGridForgotPasswordTemplate: '',
  googleRecaptchaClientKey: '',
  websocketEnabled: false,
  websocketIP: '',
  websocketPort: '',
};
