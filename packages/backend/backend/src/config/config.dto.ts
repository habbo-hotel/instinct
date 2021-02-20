import {ConfigDTO} from '@instinct-prj/interface';
import {
  IsBoolean,
  IsEmail,
  IsIP,
  IsNotEmpty,
  IsOptional,
  IsPort,
  IsString,
} from 'class-validator';

export class UpdateConfigDTO implements ConfigDTO {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  siteName!: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  siteLink!: string;

  @IsBoolean()
  siteBeta!: boolean;

  @IsIP()
  @IsOptional()
  emulatorIP!: string;

  @IsPort()
  @IsOptional()
  emulatorPort!: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  nitroURL!: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  loadingMessage!: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  groupBadgeURL!: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  sendGridAPIKey!: string;

  @IsEmail()
  @IsOptional()
  sendGridAPISender!: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  sendGridForgotPasswordTemplate!: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  googleRecaptchaClientKey!: string;

  @IsBoolean()
  @IsOptional()
  websocketEnabled!: boolean;

  @IsString()
  @IsOptional()
  websocketIP!: string;

  @IsString()
  @IsOptional()
  websocketPort!: string;
}
