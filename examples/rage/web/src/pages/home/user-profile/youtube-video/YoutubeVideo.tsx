import React from 'react';
import { Card } from 'instinct-frontend';
import { UserProfileWidgetProps } from '../UserProfile.types';

export function YoutubeVideo({ profile }: UserProfileWidgetProps) {
  return (
    <Card header="My Video">
      <iframe
        width={560}
        height={315}
        src={`https://www.youtube-nocookie.com/embed/${profile?.user?.youtube}?autoplay=true&modestbranding=1&showinfo=0&controls=0&loop=1`}
        frameBorder={0}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </Card>
  );
}
