import React, {useContext, useState} from 'react';
import {webSocketContext} from '../../context/web-socket';
import {useWebSocketEventListener} from '../../hooks/web-socket';
import {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import {WebSocketIncomingGangInviteReceivedEvent} from '@instinct-prj/interface-rp';

export function GangInviteWidget() {
  const {sendEvent} = useContext(webSocketContext);
  useWebSocketEventListener('gang_invite_received', onInviteReceived);
  const [gangInvite, setGangInvite] = useState<
    WebSocketIncomingGangInviteReceivedEvent
  >();

  function onInviteReceived(data: WebSocketIncomingGangInviteReceivedEvent) {
    setGangInvite(data);
  }

  async function onDecision(decision: boolean) {
    if (decision) {
      sendEvent('gang_invite_decision', {
        decision,
        gang_id: gangInvite!.gang_id,
        gang_rank: gangInvite!.gang_rank,
        sender_id: gangInvite!.sender_id,
      });
    }
    setGangInvite(undefined);
  }

  if (!gangInvite) {
    return null;
  }

  return (
    <Modal isOpen>
      <ModalHeader>You've been invited to join a gang!</ModalHeader>
      <ModalBody className="job-offer-widget">
        <div className="text-center">
          <h3>{gangInvite.gang_name}</h3>
          <img
            className="business-logo"
            src={`/img/corps/${gangInvite.gang_badge}.gif`}
          />
          <p className="mt-2">{gangInvite.gang_rank}</p>
        </div>
      </ModalBody>
      <ModalFooter>
        <div className="row text-right">
          <div
            className="mt-2 mr-3"
            style={{cursor: 'pointer'}}
            onClick={() => onDecision(false)}
          >
            Decline
          </div>
          <button
            className="btn btn-outline-success ml-2"
            onClick={() => onDecision(true)}
          >
            Accept
          </button>
        </div>
      </ModalFooter>
    </Modal>
  );
}
