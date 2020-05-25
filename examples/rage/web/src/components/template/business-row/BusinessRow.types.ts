import { ReactNode } from 'react';
import { Business } from 'instinct-rp-interfaces';

export interface BusinessRowProps {
  business: Business;
  children?: ReactNode;
  style?: object;
}