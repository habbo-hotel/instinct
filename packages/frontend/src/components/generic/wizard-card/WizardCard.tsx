import {Card} from '../card';
import {Form} from '../form';
import {FormGroup} from 'reactstrap';
import React, {useState} from 'react';
import {WizardCardProps} from './WizardCard.types';

export function WizardCard({steps, header, onSubmit}: WizardCardProps) {
  const [active, setActive] = useState(0);

  const canGoBack = active > 0;
  const canGoForward = active < steps.length;

  function goBack() {
    if (canGoBack) {
      setActive(a => a - 1);
    }
  }

  function goForward() {
    if (canGoForward) {
      setActive(a => a + 1);
    }
  }

  function goToStep(step: number) {
    if (active > step) {
      setActive(step);
    }
  }

  return (
    <Card header={header}>
      <ul className="nav nav-tabs">
        {steps.map((step, i) => (
          <li className="nav-item" key={i}>
            <a
              className={`nav-link ${active === i ? 'active' : ''}`}
              style={{
                background: active > i ? '#33691E' : '#0F406B',
                cursor: active > i ? 'pointer' : 'not-allowed',
              }}
              onClick={() => goToStep(i)}
            >
              {step.text}
            </a>
          </li>
        ))}
      </ul>
      <Form className="" onSubmit={onSubmit}>
        {steps[active].children}
        <div className="row">
          <div className="col-6">&nbsp;</div>
          <div className="col-6 text-right">
            <FormGroup>
              {canGoBack && (
                <button className="btn btn-outline-dark mr-2" onClick={goBack}>
                  Last Step
                </button>
              )}
              {canGoForward ? (
                <button className="btn btn-success mr-2" onClick={goForward}>
                  Next Step
                </button>
              ) : (
                <button className="btn btn-success mr-2" onClick={onSubmit}>
                  Submit
                </button>
              )}
            </FormGroup>
          </div>
        </div>
      </Form>
    </Card>
  );
}
