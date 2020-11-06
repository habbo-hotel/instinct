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
          text: <>1.Details</>,
          children: <DetailsStep />,
        },
        {
          text: <>2. Employees</>,
          children: <EmployeesStep />,
        },
        {
          text: <>3. Investment</>,
          children: <InvestmentStep />,
        },
        {
          text: <>4. Review</>,
          children: <ReviewStep />,
        },
      ]}
      onSubmit={onSubmitForm}
    />
  );
}
