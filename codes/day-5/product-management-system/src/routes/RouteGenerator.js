import React from 'react'
import { Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'
//import { productRoutes } from './productRoutes'

// const RouteGenerator = () => {
//     return (
//         productRoutes.map(r => {
//             return <Route key={r.id} path={r.url} component={r.componentName} />
//         })
//     )
// }

const RouteGenerator = ({ routes }) => {
    return (
        <Switch>
            {
                routes.map(r => {
                    return <Route key={r.id} path={r.url} component={r.componentName} exact />
                })
            }
        </Switch>
    )
}
RouteGenerator.propTypes = {
    routes: PropTypes.array.isRequired
}
export default RouteGenerator
