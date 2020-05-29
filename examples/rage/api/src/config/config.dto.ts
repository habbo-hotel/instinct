import {IsIP, IsOptional, IsPort, IsString} from 'class-validator';

export class ConfigDTO {

  @IsString()
  @IsOptional()
  siteName?: string;

  @IsString()
  @IsOptional()
  siteLink?: string;

  @IsIP()
  @IsOptional()
  emulatorIP?: string;


  @IsPort()
  @IsOptional()
  emulatorPort?: number;

  @IsString()
  @IsOptional()
  swfHabbo?: string;

  @IsString()
  @IsOptional()
  swfExternalVariables?: string;

  @IsString()
  @IsOptional()
  swfExternalTexts?: string;

  @IsString()
  @IsOptional()
  swfProductData?: string;

  @IsString()
  @IsOptional()
  swfFurniData?: string;

  @IsString()
  @IsOptional()
  swfBaseURL?: string;

  @IsString()
  @IsOptional()
  swfBadgeURL?: string;

  @IsString()
  @IsOptional()
  swfOverrideVariables?: string;

  @IsString()
  @IsOptional()
  swfOverrideTexts?: string;

  @IsString()
  @IsOptional()
  loadingMessage?: string;

  @IsString()
  @IsOptional()
  groupBadgeURL?: string;

  @IsString()
  @IsOptional()
  googleRecaptchaSiteKey?: string;

  @IsString()
  @IsOptional()
  googleRecaptchaSecretKey?: string;

}