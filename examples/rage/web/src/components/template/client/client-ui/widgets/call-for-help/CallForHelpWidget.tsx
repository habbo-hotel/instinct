import { HotelAlert } from 'components';
import React, { useContext } from 'react';
import { ThemeContext } from 'app/context';

export function CallForHelpWidget() {
  const themeContext = useContext(ThemeContext);

  function onToggle(): void {
    themeContext.setStore!({
      showCallForHelpWidget: !themeContext.showCallForHelpWidget,
    })
  }

  if (!themeContext.showCallForHelpWidget) {
    return null;
  }

  return (
    <HotelAlert title="Call For Help" onToggle={onToggle}>
      <p>Coming soon</p>
    </HotelAlert>
  )
}