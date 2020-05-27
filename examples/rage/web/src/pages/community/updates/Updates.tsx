import './Updates.scss';
import Moment from 'moment';
import { UserLayout } from 'components';
import { updateService } from 'app/service';
import { Update } from 'instinct-rp-interfaces';
import React, { useEffect, useState } from 'react';
import { defaultUpdatesState, UpdatesState } from './';
import { Card, Column, Container, Jumbotron, Loading, setURL } from 'instinct-frontend';

setURL('community/updates', <Updates />);

export function Updates() {
  const [state, setState] = useState<UpdatesState>(defaultUpdatesState);

  useEffect(() => {
    async function fetchUpdates(): Promise<void> {
      const updates: Update[] = await updateService.getAll();
      setState({
        updates,
        showSpinner: false,
      });
    }

    fetchUpdates();
  }, []);

  return (
    <UserLayout section="updates">
      <Jumbotron title="Service Updates">
        <p>Find out more about the latest features we added and how to use them</p>
      </Jumbotron>
      <Container>
        <Loading isLoading={state.showSpinner}>
          <Column side="left">
            <Card header="Updates">
              {state.updates.length === 0 && !state.showSpinner && <p>There are no updates</p>}
              <div className="update-list">
                <ul>
                  {state.updates.map((update) => (
                    <li key={update.id}>
                      <h4>
                        {update.title}
                        <small className="ml-2">{Moment(update.datePosted).format('MMM DD, YYYY')}</small>
                      </h4>
                      <p>{update.content}</p>
                      <p style={{ marginTop: -20 }}>
                        Posted by <b>{update.user.username}</b>
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </Column>
          <Column side="right">
            <Card header="Notice">
              <p>Instinct is an actively developed project and as a result; you may encounter bugs.</p>
              <p>
                In the event you do encounter a bug, please report it to us{' '}
                <a href="here" target="_blank">
                  here
                </a>
                .
              </p>
              <p>
                The Instinct development team takes bugs with seriously and aims to fix all bugs within 24 hours. Bugs will then receive a
                new test to ensure the same bug never occurs again.
              </p>
            </Card>
          </Column>
        </Loading>
      </Container>
    </UserLayout>
  );
}
