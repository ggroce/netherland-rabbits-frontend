import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { requestInventory } from '../actions';
import Layout from './Layout';
import Page1 from '../pages/Page1';
import Page2 from '../pages/Page2';
import About from '../pages/About';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

function Routes() {
  const dispatch = useDispatch();
  const { isPending, inventory, err } = useSelector((state) => state.requestInventory);

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
            <Route path="/page2" component={Page2} />
            <Route path="/about" component={About
          } />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      )} /> 
    </BrowserRouter>
  );
}

export default Routes;
