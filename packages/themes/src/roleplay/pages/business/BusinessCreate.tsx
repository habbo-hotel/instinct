import React from 'react';
import {useLocation} from 'wouter';
import {toast} from 'react-toastify';
import {BusinessDTO} from '@instinct-prj/interface-rp';
import {BusinessEditor} from './editor/BusinessEditor';
import {UserLayout} from '../../components/layout/user';
import {businessService} from '../../services/business';
import {
  Container,
  Row,
  setURL,
  MiniJumbotron,
  PermissionGuard,
} from '@instinct-prj/frontend';

setURL('business/creator', <BusinessCreate />);

export function BusinessCreate() {
  const [location, setLocation] = useLocation();

  async function onSubmit(businessDTO: BusinessDTO) {
    try {
      const business = await businessService.create(businessDTO);
      setLocation(`/businesses/${business.id}`);
    } catch {
      toast.error('Failed to create business at this time.');
    }
  }

  return (
    <UserLayout section="business">
      <PermissionGuard permission="websiteCreateBusiness">
        <Container>
          <Row>
            <MiniJumbotron>
              <h2>Business Creator</h2>
              <p>Kickstart your new business today!</p>
            </MiniJumbotron>
          </Row>
          <Row>
            <div style={{width: '100%'}}>
              <BusinessEditor onSubmit={onSubmit} />
            </div>
          </Row>
        </Container>
      </PermissionGuard>
    </UserLayout>
  );
}
