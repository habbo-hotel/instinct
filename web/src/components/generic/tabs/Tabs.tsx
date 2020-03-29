import './Tabs.scss';
import React from 'react';
import { TabsProps } from './';
import { Link } from 'react-router-dom';

export function Tabs({ tabs }: TabsProps) {
  return (
    <div className="tabs-container">
      {tabs.map(tab => (
        <Link key={tab.path} to={tab.path}>
          <span className="tab selected">{tab.text}</span>
        </Link>
      ))}
    </div>
  );
}
