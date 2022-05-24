import {Link} from 'wouter';
import React, {useContext} from 'react';
import {NavBar} from './navbar/NavBar';
import {healthContext, Icon} from '@instinct-web/core';

export function Header() {
  const {health} = useContext(healthContext);
  return (
    <>
      <header
        id="header"
        className="header-container pixelated is-small is-logged"
      >
        <div className="header-content row">
          <div className="col-6 text-left">
            <div style={{float: 'left', width: 'fit-content'}}>
              <div
                style={{
                  color: '#0D7776',
                  fontSize: 35,
                  fontWeight: 'bold',
                  letterSpacing: 1.4,
                  width: '100%',
                }}
              >
                INSTINCT
              </div>
              <div
                style={{
                  color: 'white',
                  fontSize: 15,
                  fontWeight: 'bold',
                  letterSpacing: 1.4,
                  float: 'right',
                  marginTop: -15,
                }}
              >
                Admin Panel
              </div>
            </div>
          </div>
          <div className="col-6 text-right">
            <div id="account-buttons" className="account-buttons">
              <div
                className="rounded-button"
                style={{
                  background: '#001726',
                  border: 'none',
                  boxShadow: '2px 2px #0F416C',
                  color: 'white',
                }}
              >
                {health.usersOnline}
                <Icon className="ml-2" type="user" />
              </div>
            </div>
          </div>
        </div>
      </header>
      <NavBar />
    </>
  );
}
