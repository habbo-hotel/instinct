import './Footer.scss';
import React from 'react';
import { Icon } from 'components';

export function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-social-buttons flex-container flex-horizontal-center">
        <Icon className="fa-2x" type="thunderstorm" />
      </div>
      <div className="footer-copyright">
        <b>FASHIONKILLA</b> by <b>LeChris</b>
      </div>
    </footer>
  );
}
