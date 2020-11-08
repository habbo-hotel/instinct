import {Business} from '@instinct-prj/interface-rp';
import {createFetchHook} from '@instinct-prj/frontend';
import {businessService} from '../../services/business';

export const useFetchAllBusinesses = () =>
  createFetchHook<Business[]>(businessService.getAll);
