import React, { lazy, Suspense } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
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
                                exact
                                key={index}
                                path={page.pageLink}
                                render={(props) => {
                                    let activeTab = props.location.pathname;
                                    activeTab = activeTab.replace(/\//, '');
                                    return <page.view activeTab={activeTab} />
                                }}
                            />
                        );
                    })}
                </Suspense>
            </Switch>
        </Router>
    );
};

export default App;
