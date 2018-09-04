import React from 'react'
import {Route,IndexRoute} from 'react-router'
import Template from '../containers/Template'
import TicTacToe from '../containers/TicTacToe'
import Profile from '../containers/Profile'
// import Relay from 'react-relay'



// const ViewerQueries = {
//     viewer: () => Relay.QL`query{viewer}`
// }

//queries={ViewerQueries}

const createRoute = () => {
    return(
        <Route path='/' component={Template} >
            <IndexRoute component={TicTacToe} />
            <Route path={'/profile'} component={Profile}/>
        </Route>
    )
};

const Routes = createRoute();

export default Routes;