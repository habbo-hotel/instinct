import React from 'react';
import { JobContainerProps } from './';
import { Card, UserContainer } from 'instinct-frontend';

export function JobContainer({ job }: JobContainerProps) {
  return (
    <Card header={job.name}>
      <div className="members-container">
        {
          job.users!.length === 0 && (
            <p>This position is empty!</p>
          )
        }
        {
          job.users!.map(user => (
            <UserContainer key={user.id} user={user}/>
          ))
        }
      </div>
    </Card>
  )
}