import { configService } from 'services';
import { Health } from 'instinct-interfaces';
import { createFetchHook } from '../fetch-hook.base';

export const useFetchHealth = () => createFetchHook<Health>(configService.getHealth);
