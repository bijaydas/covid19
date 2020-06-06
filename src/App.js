import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import SuspenseLoader from 'Comps/SuspenseLoader/SuspenseLoader';
import { HomeRoute } from 'Config/routes';

const Home = lazy(() => import('Comps/Home'));

const App = () => {
    return (
        <Router>
            <Switch>
                <Suspense fallback={<SuspenseLoader />}>
                    <Route exact path={HomeRoute} component={Home} />
                </Suspense>
            </Switch>
        </Router>
    );
};

export default App;
