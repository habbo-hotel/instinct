import {Business} from '@instinct/interface-rp';
import {createFetchHook} from '@instinct/frontend';
import {businessService} from '../../services/business';

export const useFetchAllBusinesses = () =>
  createFetchHook<Business[]>(businessService.getAll);
