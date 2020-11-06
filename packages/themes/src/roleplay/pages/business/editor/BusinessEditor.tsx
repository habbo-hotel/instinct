import React from 'react';
import {WizardCard} from '@instinct-prj/frontend';
import {BusinessEditorProps} from './BusinessEditor.types';
import {DetailsStep, EmployeesStep, InvestmentStep, ReviewStep} from './steps';

export function BusinessEditor({onSubmit}: BusinessEditorProps) {
  function onSubmitForm() {}

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
