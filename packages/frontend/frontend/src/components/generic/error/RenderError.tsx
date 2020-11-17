import React from 'react';
import {Link} from 'wouter';
import {Icon} from '../icon/Icon';

export function RenderError() {
  return (
    <div className="text-center">
      <h2>
        <Icon type="text-exclamation" />
      </h2>
      <h4>There was a render this page</h4>
      <p>
        We apologize for the inconvenience and our developers will be alerted.
      </p>
      <Link to="/me">
        <Icon type="caret-left" />
        Back to Home
      </Link>
    </div>
  );
}
