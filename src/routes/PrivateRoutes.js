import React, { Suspense, lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import SLUGS from 'resources/slugs';
import LoadingComponent from 'components/loading';

const DashboardComponent = lazy(() => import('./dashboard'));

function PrivateRoutes() {
    return (
        <Suspense fallback={<LoadingComponent loading />}>
            <Switch>
                <Route exact path={SLUGS.dashboard} component={DashboardComponent} />
                <Route exact path={SLUGS.dataLineage} render={() => <div>Data Lineage</div>} />
                <Route exact path={SLUGS.transforms} render={() => <div>Notebooks</div>} />
                <Route exact path={SLUGS.projects} render={() => <div>Projects</div>} />
                <Route exact path={SLUGS.referenceData} render={() => <div>Reference Data</div>} />
                <Route exact path={SLUGS.Data} render={() => <div>Source System Data</div>} />
                <Route exact path={SLUGS.Builds} render={() => <div>Builds</div>} />
                <Route exact path={SLUGS.Settings} render={() => <div>Settings</div>} />
                <Redirect to={SLUGS.dashboard} />
            </Switch>
        </Suspense>
    );
}

export default PrivateRoutes;
