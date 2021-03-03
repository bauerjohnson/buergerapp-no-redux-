import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import Layout from './components/Layouts/Layout';
import Orders from './components/Orders/Orders';
import Burgerbuilder from './containers/burgerbuilder/Burgerbuilder';
import Checkout from './containers/burgerbuilder/Checkout/Checkout';
 
class App extends Component {
  render() {
    return (
      <div>
        <Layout>
     <Switch>
     <Route path='/' exact component = {Burgerbuilder}/>
     <Route path='/Checkout' component = {Checkout}/>
     <Route path = '/Orders' component = {Orders}/>
     
     </Switch>
     </Layout>
      </div>
    );
  }
}

export default App;
