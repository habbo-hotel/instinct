import {Icon} from '@instinct-prj/frontend';
import React, {useContext, useState} from 'react';
import {businessEditorContext} from '../../context';
import {ConfirmationModalProps} from './ConfirmationModal.types';
import {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';

export function ConfirmationModal({
  isOpen,
  onToggle,
  onSubmit,
}: ConfirmationModalProps) {
  const [spinner, setSpinner] = useState(false);
  const {business} = useContext(businessEditorContext);

  function onConfirm() {
    setSpinner(true);
    onSubmit();
  }

  return (
    <Modal isOpen={isOpen} toggle={onToggle}>
      <ModalHeader toggle={onToggle}>Confirmation</ModalHeader>
      <ModalBody>
        <h3>Are You Sure?</h3>
        <p>You are about to create a new business.</p>
        <p>
          Upon creating your business, the initial investment alongside
          registration fees will be automatically deducted from your balance.
        </p>
        <div className="mt-3">
          <h3>Total Cost</h3>
          <p style={{marginTop: -10}}>investment + fees = total cost</p>
          <div
            style={{
              background: '#001726',
              padding: 10,
              fontWeight: 500,
              fontSize: 22,
            }}
          >
            {business.investment} + 100 = ${business.investment + 100}
          </div>
        </div>
      </ModalBody>
      <ModalFooter>
        <span onClick={onToggle}>Cancel</span>
        <button
          className="btn btn-outline-success ml-2"
          disabled={spinner}
          onClick={onConfirm}
        >
          {spinner ? (
            <>
              {' '}
              <Icon className="fa-spin" type="spinner" /> Saving{' '}
            </>
          ) : (
            'Confirm'
          )}
        </button>
      </ModalFooter>
    </Modal>
  );
}
