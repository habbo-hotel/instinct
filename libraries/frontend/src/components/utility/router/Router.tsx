import React, { ReactNode } from 'react';
import { Switch, Route, RouteProps } from 'wouter';

const routes: RouteProps[] = [];

export function Router() {
  return (
    <Switch>
      {routes.map((route: RouteProps, index: number) => (
        <Route key={index} {...route} />
      ))}
    </Switch>
  );
}

export function setURL(url: string, component: ReactNode): void {
  routes.push({
    path: `/${url}`,
    children: <div>{component}</div>,
  });
}
