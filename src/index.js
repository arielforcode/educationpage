import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { BrowserRouter, Switch } from 'react-router-dom';

import RouteApp from './components/App';
import getStore from './store/getStore';

import './index.css';
import Usuarios from './components/UIAdmin/usuarios'
import Materias from './components/UIAdmin/materias'
import Salir from './components/UIAdmin/salir'
import Inicio from './components/UIAdmin/Inicio'

const { store } = getStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <RouteApp path={'/usuarios'} component={Usuarios} />
        <RouteApp path={'/materias'} component={Materias} />
        <RouteApp path={'/login'} component={Salir} />
        <RouteApp path={'/'} component={Inicio} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
