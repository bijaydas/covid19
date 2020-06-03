import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { SuspenseLoader } from 'Utilities';
import { HomeRoute } from 'Config/routes';

const World = lazy(() => import('Comps/World'));


const App = () => {
    return(
        <Router>
            <Switch>
                <Suspense fallback={<SuspenseLoader />}>
                    <Route path={HomeRoute} component={World} />
                </Suspense>
            </Switch>
        </Router>
    )
}

export default App;
