import { useParams } from 'react-router-dom';
import { businessService } from 'app/service';
import { Business } from 'instinct-rp-interfaces';
import { BackButton, UserLayout } from 'components';
import React, { useContext, useEffect, useState } from 'react';
import { defaultManageBusinessState, ManageBusinessState } from './';
import { Card, Column, Container, Jumbotron, setURL, Loading, ConfigContext } from 'instinct-frontend';

setURL('business/manage/:businessID', <ManageBusiness />);

export function ManageBusiness() {
  const configContext = useContext(ConfigContext);
  const { businessID }: Record<'businessID', string> = useParams();
  const [state, setState] = useState<ManageBusinessState>(defaultManageBusinessState);

  useEffect(() => {
    async function fetchBusiness(): Promise<void> {
      const business: Business = await businessService.getByID(Number(businessID));
      setState({
        business,
        showSpinner: false,
      });
    }

    fetchBusiness();
  }, [businessID]);

  return (
    <UserLayout section="view_business">
      <Loading isLoading={state.showSpinner}>
        <Jumbotron title="Business Manager">
          <p>You can use this tool to organize your business and employees.</p>
        </Jumbotron>
        <Container>
          <BackButton />
          <h3>Business Manager</h3>
          <Column side="left">
            <Card header="Positions">
              <p>Coming Soon</p>
            </Card>
          </Column>
          <Column side="right">
            <Card>
              <div className="container">
                <div className="row">
                  <div className="col-lg-1">
                    <div style={{ marginTop: 10 }}>
                      <img
                        alt="company badge"
                        src={`${configContext.siteLink}/swfs/assets/c_images/corp-badges/${state.business?.badge}.gif`}
                      />
                    </div>
                  </div>
                  <div className="col text-right">
                    <h4>{state.business?.name}</h4>
                    <p style={{ float: 'right', whiteSpace: 'nowrap', width: 180, overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {state.business?.desc}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
            <Card header="Search Employees">
              <p>Coming Soon</p>
            </Card>
          </Column>
        </Container>
      </Loading>
    </UserLayout>
  );
}
