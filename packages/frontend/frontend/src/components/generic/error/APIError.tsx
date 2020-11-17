import React from 'react';
import {Icon} from '../icon/Icon';

export function APIError() {
  return (
    <div className="text-center">
      <h2>
        <Icon type="text-exclamation" />
      </h2>
      <h4>There was a problem with your request.</h4>
      <p>
        We apologize for the inconvenience and our developers will be alerted.
      </p>
    </div>
  );
}
