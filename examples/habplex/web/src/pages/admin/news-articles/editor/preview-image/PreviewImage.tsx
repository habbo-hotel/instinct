import React, { useState } from 'react';
import { PreviewImageProps } from './PreviewImage.types';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

export function PreviewImage({ className = '', image, style }: PreviewImageProps) {
  const [ showModal, setModal ] = useState(false);

  function toggleModal(): void {
    setModal(_ => !_);
  }

  return (
    <>
      <span className={`text-warning ${className}`} onClick={toggleModal}>Preview</span>
      <Modal isOpen={showModal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Image Preview</ModalHeader>
        <ModalBody>
          <img alt="preview" src={image} style={{ width: '100%', ...style }}/>
        </ModalBody>
      </Modal>
    </>
  )

}