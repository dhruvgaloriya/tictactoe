import React from 'react';
import ReactDOM from 'react-dom';
import {Router,browserHistory,applyRouterMiddleware} from 'react-router';
import Routes from './routes';
import registerServiceWorker from './registerServiceWorker';
// import Relay from 'react-relay'
// import useRelay from 'react-router-relay';
// import {RelayNetworkLayer,urlMiddleware} from 'react-relay-network-layer';
// import {relayApi} from "./config/endpoint";
// import auth from "./utils/auth"

// const createHeader = () => {
//     let idToken = auth.getToken();
//     if(idToken){
//         return{
//             Authorization:`Bearer ${idToken}`
//         }
//     }else{
//         return{}
//     }
// };
//
// Relay.injectNetworkLayer(new RelayNetworkLayer([
//         urlMiddleware({
//             url:(req) => relayApi,
//         }),
//         next => req => {
//             req.headers = {
//                 ...req.headers,
//                 ...createHeader()
//             };
//             return next(req)
//         },
//     ],{disableBatchQuery:true})
// );
// enviroment={Relay.Store}
// render={applyRouterMiddleware(useRelay)}
// routes={Routes}

ReactDOM.render(
    <Router routes={Routes}
            history={browserHistory}/>,
    document.getElementById('root'));
registerServiceWorker();
