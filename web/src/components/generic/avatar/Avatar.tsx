import React from 'react';
import { AvatarProps } from './';

export function Avatar({ className = 'pixelated', action, direction, gesture, headDirection, size, look }: AvatarProps) {
  let source: string = `https://www.habbo.com.br/habbo-imaging/avatarimage?figure=${look}`;

  if (action) {
    source += `&action=${action}`;
  }

  if (direction) {
    source += `&direction=${direction}`
  }

  if (gesture) {
    source += `&gesture=${gesture}`;
  }

  if (headDirection) {
    source += `&head_direction=${headDirection}`;
  }

  if (size) {
    source += `&size=${size}`;
  }

  return (
    <img alt="player avatar" src={source} className={className} />
  );
}

