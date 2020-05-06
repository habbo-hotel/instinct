import './ErrorPage.scss';
import React from 'react';
import { set404 } from 'instinct-frontend';

set404(<NotFound />);

export function NotFound() {
  return (
    <div id="error" className="flex-center position-ref full-height">
      <div className="code">404</div>

      <div className="message" style={{ padding: 10 }}>
        Not Found
      </div>
    </div>
  );
}
