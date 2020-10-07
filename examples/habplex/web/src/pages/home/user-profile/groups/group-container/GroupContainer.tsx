import { GroupContainerProps } from './';
import React, { useContext, useState } from 'react';
import { configContext, ModalOverlay } from 'instinct-frontend';

export function GroupContainer({ group }: GroupContainerProps) {
  const { groupBadgeURL } = useContext(configContext);
  const [ showModal, setModal ] = useState<boolean>(false);

  function toggleModal(): void {
    setModal(!showModal);
  }

  return (
    <>
      <img alt={`${group.name} badge`} src={`${groupBadgeURL}/${group.badge}.png`} onClick={toggleModal} style={{ cursor: 'pointer' }}/>
      <ModalOverlay header={group.name} isOpen={showModal} onToggle={toggleModal}>
        <p>Group pages are coming soon.</p>
      </ModalOverlay>
    </>
  )
}