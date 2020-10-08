import React, { ReactNode } from 'react';
import { Switch, Route, RouteProps } from 'wouter';

const routes: RouteProps[] = [];

let landingRoute: ReactNode | undefined;
let notFoundRoute: ReactNode | undefined;

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

export function set404(component: ReactNode): void {
  notFoundRoute = component;
}

export function setLanding(component: ReactNode): void {
  landingRoute = component;
}
