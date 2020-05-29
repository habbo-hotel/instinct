import './BusinessWidget.scss';
import { ThemeContext } from 'app/context';
import { businessService } from 'app/service';
import { Business } from 'instinct-rp-interfaces';
import { ConfigContext, Form, Loading } from 'instinct-frontend';
import { ClientCard, HotelAlert, Widget } from 'components';
import React, { useContext , useEffect, useState} from 'react';
import { BusinessWidgetState, defaultBusinessWidgetState } from './';

export function BusinessWidget() {
  const themeContext = useContext(ThemeContext);
  const configContext = useContext(ConfigContext);
  const [ state, setState] = useState<BusinessWidgetState>(defaultBusinessWidgetState);

  useEffect(() => {
    setState(defaultBusinessWidgetState);
    async function fetchBusinesses(): Promise<void> {
      const businesses: Business[] = await businessService.getGovernmentBusinesses();
      setState({
        activeBusiness: businesses[0],
        businesses,
        showSpinner: false,
      });
    }

    fetchBusinesses();
  }, [themeContext.showBusinessWidget]);

  function onToggle(): void {
    themeContext.setStore!({
      showBusinessWidget: !themeContext.showBusinessWidget,
    });
  }

  function setActiveBusiness(business: Business): void {
    setState({
      ...state,
      activeBusiness: business,
    });
  }

  function searchMembers(): void {

  }

  if (!themeContext.showBusinessWidget) {
    return null;
  }

  return (
    <Widget>
      <HotelAlert style={{ height: 400, width: 670 }} title="Government Agencies" onToggle={onToggle}>
        <Loading isLoading={state.showSpinner}>
          <div className="business-widget row">
            <div className="col-2" style={{ marginLeft: -40 }}>
              <ul className="business-list">
                {
                  state.businesses.map(business => (
                    <li className={state.activeBusiness === business ? 'active' : ''} key={business.id} onClick={() => setActiveBusiness(business)}>
                      <img src={`${configContext.siteLink}/swfs/assets/c_images/corp-badges/${business.badge}.gif`}/>
                    </li>
                  ))
                }
              </ul>
            </div>
            {
              state.activeBusiness && (
                <>
                  <div className="col-4">
                    <ClientCard header={state.activeBusiness.name}>
                      <p>{state.activeBusiness.desc}</p>
                    </ClientCard>
                    <ClientCard header="Search Members">
                      <Form className="" onSubmit={searchMembers}>
                        <div>
                          <input className="form-control" placeholder="Enter search terms..." type="text"/>
                        </div>
                      </Form>
                    </ClientCard>
                  </div>
                  <div className="col-6">
                    {
                      state.activeBusiness.positions!.map(position => (
                        <ClientCard header={position.name}>
                          <p>Coming soon</p>
                        </ClientCard>
                      ))
                    }
                  </div>
                </>
              )
            }
          </div>
        </Loading>
      </HotelAlert>
    </Widget>
  );
}
