import React, { useState } from 'react';
import { FriendContainerProps } from './';
import { Avatar, Button, ModalOverlay, redirect } from 'components';

export function FriendContainer({ user }: FriendContainerProps) {
  const [ showModal, setModal ] = useState<boolean>(false);

  function toggleModal(): void {
    setModal(!showModal);
  }

  return (
    <>
      <Avatar look={user.figure} onClick={toggleModal} headOnly/>
      <ModalOverlay header={`Hey, I'm ${user.username}`} isOpen={showModal} onToggle={toggleModal}>
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