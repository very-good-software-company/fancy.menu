import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Auth from './components/Auth';
import Navbar from './components/Navbar';
import { Auth as AuthState } from './state/auth';

const Home = lazy(() => import('./views/Home'));

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
              <Route path="/" exact component={Home} />
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