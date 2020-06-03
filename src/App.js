import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HighCharts from 'react-highcharts';

import { SuspenseLoader } from 'Utilities';
import { HomeRoute } from 'Config/routes';

const World = lazy(() => import('Comps/World'));

const App = () => {
    return(
        <Router>
            <Switch>
                <Suspense fallback={<div>Loading...</div>}>
                    <Route exact path={HomeRoute} component={World} />
                </Suspense>
                
            </Switch>
        </Router>
    )
}

export default App;
