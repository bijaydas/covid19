import React, { lazy, Suspense } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

import SuspenseLoader from 'Comps/SuspenseLoader/SuspenseLoader';

const World = lazy(() => import('Comps/World'));
const Home = lazy(() => import('Comps/Home'));

const pages = [
    {
        pageLink: '/',
        view: Home,
        displayName: 'Home',
        showInNavbar: true
    },
    {
        pageLink: '/world',
        view: World,
        displayName: 'World',
        showInNavbar: true
    }
];

const App = () => {
    return (
        <Router>
            <Switch>
                <Suspense fallback={<SuspenseLoader />}>
                    {pages.map((page, index) => {
                        return (
                            <Route
                                key={index}
                                path={page.pageLink}
                                component={page.view}
                            />
                        );
                    })}
                </Suspense>
            </Switch>
        </Router>
    );
};

export default App;
