import React, {Suspense, lazy} from 'react';
import {Switch, Route} from 'react-router-dom';
import routes from '../const/routes';
import AppHeader from '../pages/app-header/app.header';
import AppFooter from '../pages/app-footer/app.footer';

const Main = lazy(() => import('../pages/main'));

const Routes = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <AppHeader />
            <Switch>
                <Route path={routes.pathToMain} component={Main} />
            </Switch>
            <AppFooter />
        </Suspense>
    );
}

export default Routes;