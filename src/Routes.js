import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Auth from './components/Auth';
import Navbar from './components/Navbar';
import { Auth as AuthState } from './state/auth';

const BusinessDashboard = lazy(() => import('./views/BusinessDashboard'));
const NotFound = lazy(() => import('./views/NotFound'));

const Routes = () => {
  const { user, isAuthenticating } = AuthState.useContainer();

  return (
    <>
      { isAuthenticating && <div>Authenticating...</div> }

      { user && !isAuthenticating && (
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Navbar />
            <Switch>
              <Route path="/" exact component={BusinessDashboard} />
              <Route component={NotFound} />
            </Switch>
          </Suspense>
        </Router>
      ) }

      { !user && !isAuthenticating && (
        <Auth />
      ) }
    </>
  );
}

export default Routes;