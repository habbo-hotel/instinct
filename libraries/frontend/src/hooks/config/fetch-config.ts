import { configService } from 'services';
import { Config } from 'instinct-interfaces';
import { createFetchHook } from '../fetch-hook.base';

export const useFetchConfig = () => createFetchHook<Config>(configService.getConfig);
