import React, {useState} from 'react';
import {businessEditorContext} from './BusinessEditor';
import {ContextProvidersProps} from '@instinct-prj/frontend';
import {
  BusinessDTO,
  BusinessPositionDTO,
  exampleBusinessDTO,
} from '@instinct-prj/interface-rp';

export function BusinessEditorProvider({children}: ContextProvidersProps) {
  const [business, setBusinessState] = useState(exampleBusinessDTO);

  function setBusiness<K extends keyof Omit<BusinessDTO, 'permissions'>>(
    key: K,
    value: Omit<BusinessDTO, 'permissions'>[K]
  ) {
    setBusinessState(_ => ({
      ..._,
      [key]: value,
    }));
  }

  function addPosition(position: BusinessPositionDTO) {
    setBusinessState(_ => ({
      ..._,
      positions: [..._.positions, position],
    }));
  }

  function delPosition(index: number) {
    setBusinessState(_ => ({
      ..._,
      positions: _.positions.filter((pos, i) => i !== index),
    }));
  }

  return (
    <businessEditorContext.Provider
      value={{business, setBusiness, addPosition, delPosition}}
    >
      {children}
    </businessEditorContext.Provider>
  );
}
