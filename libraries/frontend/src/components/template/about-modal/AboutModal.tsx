import { AboutModalProps } from './';
import { healthContext } from 'context';
import React, { useContext } from 'react';
import { ModalOverlay } from 'components';

export function AboutModal({ isOpen, onToggle }: AboutModalProps) {
  const healthContext = useContext(healthContext);
  return (
    <>
      <ModalOverlay header="Instinct" isOpen={isOpen} onToggle={onToggle}>
        <div className="text-dark">
          <p>High performance, scalable content management system developed with Typescript, React and Nest.</p>
          <h5>Version</h5>
          <p>{healthContext.systemVersion}</p>
          <h5>Developed By</h5>
          <p>LeChris</p>
          <h5>With Help By</h5>
          <ul>
            <li>
              Raizer <small>(Original Layout)</small>
            </li>
            <li>
              Layne <small>(Designed loading screen)</small>
            </li>
          </ul>
        </div>
      </ModalOverlay>
      .
    </>
  );
}
