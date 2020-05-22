import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity('instinct_config')
export class ConfigEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({name: 'site_name'})
  siteName!: string;

  @Column({name: 'site_link'})
  siteLink!: string;

  @Column({name: 'emulator_ip'})
  emulatorIP!: string;

  @Column({name: 'emulator_port', type: 'int'})
  emulatorPort!: number;

  @Column({name: 'swf_habbo'})
  swfHabbo!: string;

  @Column({name: 'swf_external_variables'})
  swfExternalVariables!: string;

  @Column({name: 'swf_external_texts'})
  swfExternalTexts!: string;

  @Column({name: 'swf_productdata'})
  swfProductData!: string;

  @Column({name: 'swf_furnidata'})
  swfFurniData!: string;

  @Column({name: 'swf_figuredata'})
  swfFigureData!: string;

  @Column({name: 'swf_base_url'})
  swfBaseURL!: string;

  @Column({name: 'swf_badge_url'})
  swfBadgeURL!: string;

  @Column({name: 'swf_override_variables'})
  swfOverrideVariables!: string;

  @Column({name: 'swf_override_texts'})
  swfOverrideTexts!: string;

  @Column({name: 'loading_message'})
  loadingMessage!: string;

  @Column({name: 'group_badge_url'})
  groupBadgeURL!: string;

  @Column({name: 'google_recaptcha_site_key'})
  googleRecaptchaSiteKey!: string;

  @Column({name: 'google_recaptcha_secret_key'})
  googleRecaptchaSecretKey!: string;
}
