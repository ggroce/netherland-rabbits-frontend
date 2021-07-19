import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { requestInventory } from '../actions';
import Layout from './Layout.jsx';
import Policies from '../pages/Policies.jsx';
import About from '../pages/About.jsx';
import Home from '../pages/Home.jsx';
import NotFound from '../pages/NotFound.jsx';

function Routes() {
  const dispatch = useDispatch();

  const onRequestInventory = () => {
    dispatch(requestInventory());
  }

  useEffect(() => {
    onRequestInventory();
  }, []);

  return(
    <BrowserRouter>
      <Route render={(props) => (
        <Layout {...props}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" exact component={Home} />
            <Route path="/policies" component={Policies} />
            <Route path="/about" component={About} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      )} /> 
    </BrowserRouter>
  );
}

export default Routes;
