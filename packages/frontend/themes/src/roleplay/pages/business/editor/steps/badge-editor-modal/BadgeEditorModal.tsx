import './BadgeEditorModal.scss';
import React, {useContext, useState} from 'react';
import {businessEditorContext} from '../../context';
import {Modal, ModalBody, ModalHeader} from 'reactstrap';
import {businessBadges} from '@instinct-prj/interface-rp';

export function BadgeEditorModal() {
  const [showModal, setModal] = useState(false);
  const {business, setBusiness} = useContext(businessEditorContext);

  function onToggle() {
    setModal(_ => !showModal);
  }

  return (
    <>
      <img
        className="business-badge"
        src={`/img/corps/${business.badge}.gif`}
        onClick={onToggle}
      />
      <Modal isOpen={showModal} toggle={onToggle}>
        <ModalHeader toggle={onToggle}>Badge Picker</ModalHeader>
        <ModalBody>
          <div className="row" style={{height: 400, overflowY: 'scroll'}}>
            {businessBadges.map(badge => (
              <div className="col-3" key={badge}>
                <img
                  className={`business-badge ${
                    badge === business.badge ? 'active-badge' : ''
                  }`}
                  src={`/img/corps/${badge}.gif`}
                  onClick={() => setBusiness('badge', badge)}
                />
              </div>
            ))}
          </div>
        </ModalBody>
      </Modal>
    </>
  );
}
