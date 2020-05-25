import { HotelAlert } from 'components';
import { ThemeContext } from 'app/context';
import React, { useContext } from 'react';

export function WantedListWidget() {
  const themeContext = useContext(ThemeContext);

  function onToggle(): void {
    themeContext.setStore!({
      showWantedListWidget: !themeContext.showWantedListWidget,
    })
  }

  if (!themeContext.showWantedListWidget) {
    return null;
  }

  return (
    <HotelAlert title="Wanted List" onToggle={onToggle}>
      <p>Coming soon</p>
    </HotelAlert>
  )
}