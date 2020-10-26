import './JobOffer.scss';
import React, {useContext, useEffect, useState} from 'react';
import {registerClientWidget, sessionContext, webSocketContext} from '@instinct/frontend';
import {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';

interface UserOffer {
  event_data: {
    offer_name: 'job';
  }
}


registerClientWidget(JobOfferWidget);

export function JobOfferWidget() {
  const {online} = useContext(sessionContext);
  const {onEvent} = useContext(webSocketContext);
  const [isOpen, toggleModal] = useState(false);

  function handleOffer(data: UserOffer) {
    if (data.event_data.offer_name === 'job') {
      toggleModal(true);
    }
  }

  useEffect(() => {
    function subscribeToJobOffers() {
      onEvent('user_offered_something', handleOffer);
    }

    if (online) {
      subscribeToJobOffers();
    }
  }, [online]);

  return (
    <Modal isOpen={isOpen}>
      <ModalHeader>You've been offered a job!</ModalHeader>
      <ModalBody className="job-offer-widget">
        <div className="text-center">
          <h3>Police Department</h3>
          <img
            className="business-logo"
            src="https://game.peakrp.com/habbo-imaging/badge/police.gif"
          />
          <div
            style={{
              background: '#001726',
              border: '1px solid #0b6395',
              width: 250,
              margin: '0 auto',
              padding: 5,
            }}
          >
            Cadet
          </div>
          <p className="mt-2">
            You will be paid <b>50c</b> every <b>10 minutes</b>
          </p>
        </div>
      </ModalBody>
      <ModalFooter>
        <span>Decline</span>
        <button className="btn btn-outline-success ml-2">Accept</button>
      </ModalFooter>
    </Modal>
  );
}
