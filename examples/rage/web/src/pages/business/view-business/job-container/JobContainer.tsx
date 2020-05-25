import React from 'react';
import { JobContainerProps } from './';
import { Card, UserContainer } from 'instinct-frontend';

export function JobContainer({ job }: JobContainerProps) {
  return (
    <Card header={job.name}>
      <div className="members-container">
        {
          job.employees!.length === 0 && (
            <p>This position is empty!</p>
          )
        }
        {
          job.employees!.map(user => (
            <UserContainer key={user.id} user={user}/>
          ))
        }
      </div>
    </Card>
  )
}