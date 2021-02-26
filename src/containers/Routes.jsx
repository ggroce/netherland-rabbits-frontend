import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { requestInventory } from '../actions';
import Layout from './Layout.jsx';
import Page1 from '../pages/Page1.jsx';
import Policies from '../pages/Policies.jsx';
import About from '../pages/About.jsx';
import Home from '../pages/Home.jsx';
import NotFound from '../pages/NotFound.jsx';

function Routes() {
  const dispatch = useDispatch();

  useEffect(() => {
    onRequestInventory();
  }, []);

  const onRequestInventory = () => {
    dispatch(requestInventory());
  }

  return(
    <BrowserRouter>
      <Route render={(props) => (
        <Layout {...props}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" exact component={Home} />
            <Route path="/page1" component={Page1} />
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
