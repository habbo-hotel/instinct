import React, { useContext } from 'react';
import { ThemeContext } from 'app/context';
import { HotelAlert, Widget } from 'components';

export function WantedListWidget() {
  const themeContext = useContext(ThemeContext);

  function onToggle(): void {
    themeContext.setStore!({
      showWantedListWidget: !themeContext.showWantedListWidget,
    });
  }

  if (!themeContext.showWantedListWidget) {
    return null;
  }

  return (
    <Widget>
      <HotelAlert title="Wanted List" onToggle={onToggle}>
        <p>Coming soon</p>
      </HotelAlert>
    </Widget>
  );
}
