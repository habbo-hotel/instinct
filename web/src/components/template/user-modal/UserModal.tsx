import { UserModalProps } from './';
import { redirect } from 'components';
import React, { useState } from 'react';
import { Avatar, Button, ModalOverlay } from 'instinct-frontend';

export function UserModal({ children, user }: UserModalProps) {
  const [ showModal, setModal ] = useState<boolean>(false);

  function toggleModal(): void {
    setModal(!showModal);
  }

  return (
    <>
      <div onClick={toggleModal} style={{ cursor: 'pointer '}}>
        {children}
      </div>
      <ModalOverlay header={user.username} isOpen={showModal} onToggle={toggleModal}>
        <div>
          <Avatar look={user.figure}/>
          <Button color="primary" onClick={() => redirect(`profile/${user.username}`)}>
            View Profile
          </Button>
        </div>
      </ModalOverlay>
     </>
  )

}