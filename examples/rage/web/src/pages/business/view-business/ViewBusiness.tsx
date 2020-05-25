import './ViewBusiness.scss';
import { useParams } from 'react-router-dom';
import { businessService } from 'app/service';
import { BackButton, UserLayout } from 'components';
import { PrivateBusinessHandler } from './types/private';
import { GovernmentBusinessHandler } from './types/government';
import { Business, BusinessType } from 'instinct-rp-interfaces';
import React, { FunctionComponent, useContext, useEffect, useState } from 'react';
import { ConfigContext, Container, Jumbotron, Loading, setURL } from 'instinct-frontend';
import { BusinessTypeHandlerProps, defaultViewBusinessState, ViewBusinessState } from './ViewBusiness.types';

setURL('businesses/:businessID', <ViewPrivateBusiness/>);

export function ViewPrivateBusiness() {
  const configContext = useContext(ConfigContext);
  const { businessID }: Record<'businessID', string> = useParams()
  const [ state, setState ] = useState<ViewBusinessState>(defaultViewBusinessState);

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


  const businessHandlers: Record<BusinessType, FunctionComponent<BusinessTypeHandlerProps>> = {
    [BusinessType.Government]: GovernmentBusinessHandler,
    [BusinessType.Private]: PrivateBusinessHandler,
  }

  const BusinessHandler = businessHandlers[state.business?.type ?? BusinessType.Private];

  return (
    <UserLayout section="view_business">
      <Loading isLoading={state.showSpinner}>
        <Jumbotron style={{ backgroundImage: `url('${configContext.siteLink}/swfs/assets/c_images/corp-badges/${state.business?.badge}.gif')`}} title={state.business?.name}>
          <p>{state.business?.desc}</p>
        </Jumbotron>
        <Container>
          <BackButton/>
          {
            !state.showSpinner && (
              <BusinessHandler business={state.business}/>
            )
          }
        </Container>
      </Loading>
    </UserLayout>
  )
}
