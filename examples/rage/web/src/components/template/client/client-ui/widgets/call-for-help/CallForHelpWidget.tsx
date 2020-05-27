import { HotelAlert, Widget } from 'components';
import { Form } from 'instinct-frontend';
import React, { useContext } from 'react';
import { ThemeContext } from 'app/context';

export function CallForHelpWidget() {
  const themeContext = useContext(ThemeContext);

  function onToggle(): void {
    themeContext.setStore!({
      showCallForHelpWidget: !themeContext.showCallForHelpWidget,
    });
  }

  if (!themeContext.showCallForHelpWidget) {
    return null;
  }

  return (
    <Widget>
      <HotelAlert title="Call For Help" onToggle={onToggle}>
        <Form className="">
          <div className="form-group">
            <h3>What is the problem</h3>
            <input className="form-control" />
          </div>
        </Form>
      </HotelAlert>
    </Widget>
  );
}
