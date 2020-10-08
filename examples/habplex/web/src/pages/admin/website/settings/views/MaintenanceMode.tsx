import React from 'react';
import Toggle from 'react-toggle';

export function MaintenanceMode() {
  return (
    <>
      <p>When the hotel is in maintenance mode, access to the website is restricted to members of the staff team (with admin access).</p>
     <Toggle checked={false} onChange={() => {}}/>
    </>
  )
}