export interface Config {
  siteName: string;
  siteLink: string;
  siteBeta: boolean;
  emulatorIP: string;
  emulatorPort: string;
  swfHabbo: string;
  swfExternalVariables: string;
  swfExternalTexts: string;
  swfProductData: string;
  swfFurniData: string;
  swfFigureData: string;
  swfBaseURL: string;
  swfBadgeURL: string;
  rankBadgeURL: string;
  loadingMessage: string;
  groupBadgeURL: string;
  googleRecaptchaClientKey: string;
  websocketEnabled: boolean;
  websocketIP: string;
  websocketPort: string;
  nitroURL: string;
  discordURL: string;
  twitterURL: string;
  maintenanceEnabled: boolean;
  findRetrosUsername?: string;
  stripePublicKey: string;
  logoURL: string;
  awsS3Bucket: string;
}

export const defaultConfig: Config = {
  siteName: 'Habbo',
  siteBeta: false,
  emulatorIP: '127.0.0.1',
  emulatorPort: '3002',
  siteLink: 'http://localhost:3000',
  swfHabbo: 'http://localhost:3000/swfs/gamedata/habbo.swf',
  swfExternalVariables: 'http://localhost:3000/swfs/gamedata/variables.txt',
  swfExternalTexts: 'http://localhost:3000/swfs/gamedata/texts.txt',
  swfProductData: 'http://localhost:3000/swfs/gamedata/productdata.txt',
  swfFurniData: 'http://localhost:3000/swfs/gamedata/furnidata.xml',
  swfFigureData: 'http://localhost:3000/swfs/gamedata/figuredata.xml',
  swfBaseURL: 'http://localhost:3000/swfs/other/game/',
  swfBadgeURL: 'http://localhost:3000/swfs/other/images/album1584',
  rankBadgeURL: '',
  loadingMessage: 'Please wait as I do some things',
  groupBadgeURL: 'http://localhost:3000/swfs/other/images/Badgeparts/generated',
  googleRecaptchaClientKey: '',
  websocketEnabled: false,
  websocketIP: '',
  websocketPort: '',
  nitroURL: '',
  discordURL: '',
  twitterURL: '',
  maintenanceEnabled: false,
  findRetrosUsername: undefined,
  stripePublicKey: '',
  logoURL: '',
  awsS3Bucket: '',
};
