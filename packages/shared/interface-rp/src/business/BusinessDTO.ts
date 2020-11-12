import {BusinessType} from './Business';

export interface BusinessDTO {
  name: string;
  desc: string;
  type: BusinessType;
  badge: string;
  homeRoom: number;
  investment: number;
  positions: BusinessPositionDTO[];
}

export type UpdateBusinessDTO = Partial<Omit<BusinessDTO, 'positions'>>;

export interface BusinessPositionDTO {
  id?: number;
  order: number;
  name: string;
  maleUniform: string;
  femaleUniform: string;
  canHire: boolean;
  canFire: boolean;
  canPromote: boolean;
  canDemote: boolean;
  isManager: boolean;
  shiftWage: number;
  shiftTime: number;
}

export const exampleBusinessPositionDTO: BusinessPositionDTO = {
  id: undefined,
  order: 1,
  name: '',
  maleUniform: '',
  femaleUniform: '',
  canHire: false,
  canFire: false,
  canPromote: false,
  canDemote: false,
  isManager: false,
  shiftTime: 600,
  shiftWage: 25,
};

export const exampleBusinessDTO: BusinessDTO = {
  name: '',
  desc: '',
  type: BusinessType.NORMAL,
  badge: 'builders',
  homeRoom: 0,
  investment: 100,
  positions: [],
};
