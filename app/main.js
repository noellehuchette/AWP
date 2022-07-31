import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
import '../public/style.css';
import Routes from './components/Routes';

const root = createRoot(
  document.getElementById('app'));

root.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
);