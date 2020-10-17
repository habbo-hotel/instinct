import {Health} from '@instinct/interface';
import {createFetchHook} from '../fetch-hook.base';
import {configService} from '../../services/config';

export const useFetchHealth = () =>
  createFetchHook<Health>(configService.getHealth);
