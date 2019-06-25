import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';

import 'raf/polyfill';

import 'core-js/es/map';
import 'core-js/es/set';


import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter } from 'react-router-dom';
import Main from './pages/Main';
import configureStore from './config/configureStore';
import { Provider } from 'react-redux';

// import { createBrowserHistory } from 'history';

// export const history = createBrowserHistory({
//   basename: process.env.PUBLIC_URL
// }); 

const store = configureStore();

ReactDOM.render( 
        <Provider store={store}>
        {/* <HashRouter history={ hashHistory } > */}
        {/* <HashRouter basename={process.env.PUBLIC_URL} > */}
        <HashRouter  >
          <Main />
        </HashRouter>
      </Provider>, 
      document.getElementById('root')
);

registerServiceWorker();

