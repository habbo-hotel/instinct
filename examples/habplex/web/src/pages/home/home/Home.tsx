import React, { useContext } from 'react';
import { MyProfile } from './my-profile';
import {
  Container,
  Column,
  UserLayout,
  setURL,
  RecentNews,
  PopularGroups,
  PopularRooms,
  sessionContext
} from 'instinct-frontend';

setURL('home', <Home />);

export function Home() {
  const session = useContext(sessionContext);
  return (
   <div style={{ color: 'white', fontSize: 32, textAlign: 'center' }}>
     <p>Hello, world.</p>
     <ul>
       <li>
         <b>Session: </b>
         <span>{session.user?.username ?? 'N/A'}</span>
       </li>
       <li>
         <b>User Layout: </b>
         <UserLayout>
           <span style={{ color: 'red' }}>It's here</span>
         </UserLayout>
       </li>
     </ul>
   </div>
  )
}


/*
return (
    <UserLayout>
      <Container>
        <Column side="left">
          <MyProfile />
          <br />
          <PopularRooms />
        </Column>
        <Column side="right">
          <RecentNews />
          <br />
          <PopularGroups />
        </Column>
      </Container>
    </UserLayout>
  );
 */