import { AboutModalProps } from './';
import { healthContext } from 'context';
import React, { useContext } from 'react';
import { ModalOverlay } from 'components';

export function AboutModal({ isOpen, onToggle }: AboutModalProps) {
  const { systemVersion } = useContext(healthContext);
  return (
    <>
      <ModalOverlay header="Instinct" isOpen={isOpen} onToggle={onToggle}>
        <div className="text-dark">
          <p>High performance, scalable content management system developed with Typescript, React and Nest.</p>
          <h5>Version</h5>
          <p>{systemVersion}</p>
        </div>
      </ModalOverlay>
      .
    </>
  );
}
