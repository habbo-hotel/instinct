import React, {useState} from 'react';
import {Modal, ModalBody, ModalHeader} from 'reactstrap';
import {useWebSocketEventListener} from '../../hooks/web-socket';

export function InitialRoomLoadedWidget() {
  useWebSocketEventListener('initial_room_loaded', handleRoomLoaded);
  const [isOpen, toggleModal] = useState(false);

  function handleRoomLoaded() {
    toggleModal(true);
  }

  return (
    <Modal isOpen={isOpen}>
      <ModalHeader>Initial Room Loaded</ModalHeader>
      <ModalBody>
        <p>We did it!</p>
      </ModalBody>
    </Modal>
  );
}
