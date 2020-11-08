import React, {useContext, useState} from 'react';
import {WizardCard} from '@instinct-prj/frontend';
import {BusinessEditorProps} from './BusinessEditor.types';
import {businessEditorContext, BusinessEditorProvider} from './context';
import {DetailsStep, EmployeesStep, InvestmentStep, ReviewStep} from './steps';
import {ConfirmationModal} from './steps/confirmation-modal';

export function BusinessEditorComponent({onSubmit}: BusinessEditorProps) {
  const [confirmation, setConfirmation] = useState(false);
  const {business} = useContext(businessEditorContext);

  function toggleConfirmation() {
    setConfirmation(_ => !_);
  }

  function onSubmitForm() {
    setConfirmation(true);
  }

  return (
    <>
      <WizardCard
        steps={[
          {
            text: 'Details',
            children: <DetailsStep />,
          },
          {
            text: 'Employees',
            children: <EmployeesStep />,
          },
          {
            text: 'Investment',
            children: <InvestmentStep />,
          },
          {
            text: 'Review',
            children: <ReviewStep />,
          },
        ]}
        onSubmit={onSubmitForm}
      />
      <ConfirmationModal
        isOpen={confirmation}
        onToggle={toggleConfirmation}
        onSubmit={() => onSubmit(business)}
      />
    </>
  );
}

export function BusinessEditor(props: BusinessEditorProps) {
  return (
    <BusinessEditorProvider>
      <BusinessEditorComponent {...props} />
    </BusinessEditorProvider>
  );
}
