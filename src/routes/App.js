import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../container/Home';
import Tienda from '../container/Tienda';
import NotFound from '../container/NotFound';
import Layout from '../components/Layout';
import '../styles/App.scss';

const App = () => (
  <BrowserRouter basename='./'>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/portafolio' component={Tienda} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
