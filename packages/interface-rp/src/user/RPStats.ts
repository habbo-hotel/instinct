import {BusinessPosition} from '../business/Business';

export interface BusinessPositionWithBusiness extends BusinessPosition {
  businessName: string;
}

export interface UserJob {
  businessID: number;
  positionID: number;
  businessName: string;
  positionName: string;
  businessBadge: string;
  permissions: {
    manager: boolean;
    canHire: boolean;
    canFire: boolean;
    canPromote: boolean;
    canDemote: boolean;
  };
}

export const exampleUserJob: UserJob = {
  businessID: 1,
  positionID: 1,
  businessName: 'Beta Testers',
  positionName: 'Test',
  businessBadge: 'BETA',
  permissions: {
    manager: false,
    canHire: false,
    canFire: false,
    canPromote: false,
    canDemote: false,
  },
};

export interface UserRPStats {
  health: {
    current: number;
    maximum: number;
  };
  energy: {
    current: number;
    maximum: number;
  };
  job: UserJob;
}

export const exampleUserRPStats: UserRPStats = {
  health: {
    current: 100,
    maximum: 100,
  },
  energy: {
    current: 100,
    maximum: 100,
  },
  job: exampleUserJob,
};
