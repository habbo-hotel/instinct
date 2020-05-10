import './TabCard.scss';
import { TabCardProps } from './index';
import React, { useState } from 'react';
import { Icon, TabItem } from 'components';

export function TabCard({ header, tabs }: TabCardProps) {
  const [active, setActive] = useState<number>(0);

  const activeTab: TabItem = tabs[active];

  return (
    <article className="tab-card">
      <ul className="navigation">
        {tabs.map((tab, index) => (
          <li className={active === index ? 'selected' : ''} key={index} onClick={() => setActive(index)}>
            <Icon className="mr-0" type={tab.icon} />
          </li>
        ))}
      </ul>
      <h3 className="aside-title">{activeTab.name}</h3>
      {activeTab.children}
    </article>
  );
}
