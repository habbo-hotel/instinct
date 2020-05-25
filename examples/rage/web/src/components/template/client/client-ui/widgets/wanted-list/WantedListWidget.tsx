import { HotelAlert } from 'components';
import Draggable from 'react-draggable';
import React, { useContext } from 'react';
import { ThemeContext } from 'app/context';

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
    <Draggable>
      <HotelAlert title="Wanted List" onToggle={onToggle}>
        <p>Coming soon</p>
      </HotelAlert>
    </Draggable>
  )
}