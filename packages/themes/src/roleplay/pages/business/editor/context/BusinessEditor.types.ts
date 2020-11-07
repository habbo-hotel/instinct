import {
  BusinessDTO,
  BusinessPositionDTO,
  exampleBusinessDTO,
} from '@instinct-prj/interface-rp';

export interface BusinessEditorContext {
  business: BusinessDTO;
  setBusiness<K extends keyof Omit<BusinessDTO, 'positions'>>(
    key: K,
    value: Omit<BusinessDTO, 'positions'>[K]
  ): void;
  addPosition(position: BusinessPositionDTO): void;
  delPosition(index: number): void;
}

export const defaultBusinessEditorContext: BusinessEditorContext = {
  business: exampleBusinessDTO,
  setBusiness<K extends keyof Omit<BusinessDTO, 'positions'>>(
    key: K,
    value: Omit<BusinessDTO, 'positions'>[K]
  ) {},
  addPosition(position: BusinessPositionDTO) {},
  delPosition(index: number) {},
};
