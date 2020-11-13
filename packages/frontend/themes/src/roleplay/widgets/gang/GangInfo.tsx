import React, {useState} from 'react';
import Draggable from 'react-draggable';
import {gangService} from '../../services/gang';
import {Avatar, UserContainer} from '@instinct-prj/frontend';
import {useWebSocketEventListener} from '../../hooks/web-socket';
import {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import {Gang, WebSocketIncomingGangInfoEvent} from '@instinct-prj/interface-rp';

export function GangInfoWidget() {
  const [gang, setGang] = useState<Gang>();
  useWebSocketEventListener('gang_info', onInfoReceived);

  async function onInfoReceived({gang_id}: WebSocketIncomingGangInfoEvent) {
    const gangData = await gangService.getByID(gang_id);
    setGang(gangData);
  }

  if (!gang) {
    return null;
  }

  return (
    <Draggable>
      <Modal backdrop={false} fade={false} id="gang-disband-widget" isOpen>
        <ModalHeader>Gang Information</ModalHeader>
        <ModalBody className="job-offer-widget">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <h2>{gang.name}</h2>
                <img
                  className="business-logo"
                  src={`/img/corps/${gang.badge}.gif`}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <h3>Founder</h3>
              <Avatar look={gang.owner.figure} />
            </div>
            <div className="col-6">
              <h3>Members</h3>
              <div style={{maxHeight: 200, overflowY: 'scroll'}}>
                {gang.ranks.map(rank => (
                  <div key={rank.id}>
                    {rank.users.map(_ => (
                      <UserContainer key={_.id} user={_} />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <div className="row text-right">
            <button
              className="btn btn-outline-danger ml-2"
              onClick={() => setGang(undefined)}
            >
              Close
            </button>
          </div>
        </ModalFooter>
      </Modal>
    </Draggable>
  );
}
