import React, { useContext } from 'react';
import { ThemeContext } from 'app/context';
import { ClientCard, HotelAlert, Widget } from 'components';

export function MapWidget() {
  const themeContext = useContext(ThemeContext);

  function onToggle(): void {
    themeContext.setStore!({
      showMapWidget: !themeContext.showMapWidget,
    });
  }

  if (!themeContext.showMapWidget) {
    return null;
  }

  return (
    <Widget>
      <HotelAlert title="City Map" onToggle={onToggle}>
        <ClientCard header="Notice">
          <p>There is no map to show.</p>
        </ClientCard>
      </HotelAlert>
    </Widget>
  );
}
