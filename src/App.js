import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { SuspenseLoader } from 'Utilities';
import { HomeRoute } from 'Config/routes';
import World from 'Comps/World';
// const World = lazy(() => import('Comps/World'));


const App = () => {
    return(
        <Router>
            <Switch>
                <Suspense fallback={<SuspenseLoader />}>
                    <World />
                </Suspense>
            </Switch>
        </Router>
    )
}

export default App;
