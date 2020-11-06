export interface BusinessDTO {
  name: string;
  desc: string;
  badge: string;
  homeRoom: number;
  positions: BusinessPositionDTO[];
}

export interface BusinessPositionDTO {
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

export const exampleBusinessDTO: BusinessDTO = {
  name: 'Police Department',
  desc: 'Protect and Serve',
  badge: 'police',
  homeRoom: 1,
  positions: [
    {
      order: 1,
      name: 'Cadet',
      maleUniform: '-',
      femaleUniform: '-',
      canHire: true,
      canFire: true,
      canPromote: true,
      canDemote: true,
      isManager: true,
      shiftWage: 100,
      shiftTime: 300,
    },
  ],
};
