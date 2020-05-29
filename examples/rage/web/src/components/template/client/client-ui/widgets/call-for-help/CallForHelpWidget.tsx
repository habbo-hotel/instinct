import React, { useContext } from 'react';
import { ThemeContext } from 'app/context';
import { ClientCard, HotelAlert, Widget } from 'components';
import { Form } from 'instinct-frontend';

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
        <div className="row">
          <div className="col-4">
            <ClientCard header="My Tickets">
              <p className="text-center">No Past Tickets</p>
            </ClientCard>
          </div>
          <div className="col-8">
            <ClientCard header="Create Ticket">
              <Form className="container">
                <div className="mt-3">
                  <label>Title</label>
                  <input className="form-control"/>
                </div>
                <div className="mt-3">
                  <label>What's Going On</label>
                  <textarea className="form-control" rows={4}/>
                </div>
                <div className="mt-3 text-right">
                  <button>Submit Ticket</button>
                </div>
              </Form>
            </ClientCard>
          </div>
        </div>
      </HotelAlert>
    </Widget>
  );
}
