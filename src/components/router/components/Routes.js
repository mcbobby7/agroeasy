import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import aboutUs from '../../aboutUs';
import app from '../../app';
import home from '../../home';
import NoMatch from './NoMatch';
import productList  from '../../productList';
import userProfile from '../../userProfile';
import learnMore from '../../learnMore';
import { PATHS } from '../constants';

const { ABOUT, HOME, MARKET, PROFILE, MORE } = PATHS;
const { App } = app.components;

const Routes = () => (
    <BrowserRouter>
        <App>
            <Switch>
                <Route path={HOME} exact strict component={home.components.Home} />
                <Route path={MARKET} exact strict component={productList.components.ProductList} />
                <Route path={PROFILE} component={userProfile.components.UserProfile} />
                <Route path={ABOUT} exact strict component={aboutUs.components.AboutUs} />
                <Route component={NoMatch} />
                <Route path={MORE} exact strict component={learnMore.components.LearnMore} />

            </Switch>
        </App>
    </BrowserRouter>
);

export default Routes;
