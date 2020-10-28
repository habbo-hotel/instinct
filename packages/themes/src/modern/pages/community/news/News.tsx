import React from 'react';
import {ArticleList, setURL, UserLayout} from '@instinct-prj/frontend';

setURL('community/news', <News />);

export function News() {
  return (
    <UserLayout>
      <ArticleList />
    </UserLayout>
  );
}
