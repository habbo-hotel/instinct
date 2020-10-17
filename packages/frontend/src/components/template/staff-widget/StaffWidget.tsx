import './StaffWidget.scss';
import {Bans} from './views/Bans';
import React, {useState} from 'react';
import {Support} from './views/Support';
import {ClientCard, Icon, PermissionGuard, TabItem} from '@instinct/frontend';

export function StaffWidget() {
  const [showModal, toggleModal] = useState(false);
  const [activeTab, toggleTab] = useState(0);

  const tabs: TabItem[] = [
    {
      name: 'Bans',
      icon: 'ban',
      children: <Bans />,
    },
    {
      name: 'Support',
      icon: 'question-circle',
      children: <Support />,
    },
  ];

  function toggle(): void {
    toggleModal(_ => !_);
  }

  return (
    <PermissionGuard permission="websiteShowAdminPanel">
      <button style={{cursor: 'default'}} onClick={toggle}>
        <Icon family="fas" type="shield-alt" />
        Staff
      </button>
      {showModal && (
        <ClientCard header="Staff Tools">
          <div className="row">
            {tabs.map((tab, index) => (
              <div
                className={`${
                  activeTab === index
                    ? 'staff-widget-item active-staff-widget'
                    : 'staff-widget-item'
                }`}
                key={index}
                onClick={() => toggleTab(index)}
              >
                <Icon family="fas" type={tab.icon} />
              </div>
            ))}
          </div>
          <br />
          {tabs[activeTab].children}
        </ClientCard>
      )}
    </PermissionGuard>
  );
}
