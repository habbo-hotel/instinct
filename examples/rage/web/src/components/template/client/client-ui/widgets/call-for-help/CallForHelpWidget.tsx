import { HotelAlert } from 'components';
import React, { useContext } from 'react';
import { ThemeContext } from 'app/context';
import { Form } from 'instinct-frontend';

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
      <Form className="">
        <div className="form-group">
          <h3>What is the problem</h3>
          <input className="form-control"/>
        </div>
      </Form>
    </HotelAlert>
  )
}