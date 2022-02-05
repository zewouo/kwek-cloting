import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import './index.css';
import App from './App';

import {store,persistor} from './redux/store';

import { BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);