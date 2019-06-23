import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import Loadable from 'react-loadable'

import Loader from './layout/Loader'
import Layout from './layout'
import NotFoundPage from './layout/NotFoundPage'

const loadable = loader =>
    Loadable({
        loader,
        delay: false,
        loading: () => <Loader />,
    })

const routes = [
    // Dashboards
    {
        path: '/test',
        component: loadable(() => import('./components/test')),
    },
]

class Router extends Component {
    render() {
        const { history } = this.props
        return (
            <ConnectedRouter history={history} >
                <Layout>
                    <Switch>
                        <Route exact path="/" render={() => <Redirect to="/test" />} />
                        {routes.map(route => (
                            <Route
                                path={route.path}
                                component={route.component}
                                key={route.path}
                                exact={route.exact}
                            />
                        ))}
                        <Route component={NotFoundPage} />
                    </Switch>
                </Layout>
            </ConnectedRouter>
        )
    }
}

export default Router
