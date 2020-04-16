import './Footer.scss';
import { Icon } from 'components';
import React, { useContext } from 'react';
import { ThemeContext, ThemeContextInterface } from 'app/context';

export function Footer() {
  const themeContext = useContext<ThemeContextInterface>(ThemeContext);

  if (!themeContext.showFooter) {
    return null;
  }

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
