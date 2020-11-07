import React, {useContext} from 'react';
import {WizardCard} from '@instinct-prj/frontend';
import {BusinessEditorProps} from './BusinessEditor.types';
import {businessEditorContext, BusinessEditorProvider} from './context';
import {DetailsStep, EmployeesStep, InvestmentStep, ReviewStep} from './steps';

export function BusinessEditorComponent({onSubmit}: BusinessEditorProps) {
  const {business} = useContext(businessEditorContext);

  function onSubmitForm() {
    onSubmit(business);
  }

  return (
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
  );
}

export function BusinessEditor(props: BusinessEditorProps) {
  return (
    <BusinessEditorProvider>
      <BusinessEditorComponent {...props} />
    </BusinessEditorProvider>
  );
}
