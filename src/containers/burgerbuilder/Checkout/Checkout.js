import React, { Component } from 'react'
import CheckoutSummary from '../../../components/CheckoutSummary.js/CheckoutSummary';

import {Route } from 'react-router-dom';
import ContactData from '../../../components/ContactData/ContactData';
class Checkout extends Component {
    state = {
      ingredients : null,
      price : 0
      //{
    // // salad : 1,
    // // meat : 1,
    // // cheese : 1,
    // // bacon : 1
    //     }
      }

     
      componentWillMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = null;
        for(let param of query.entries()) {
          if (param[0] === 'price') {
            price = param[1];
          } else {
            ingredients[param[0]] = +param[1];
          }
            
        }
        this.setState({ingredients : ingredients, totalprice : price})
    }

      checkoutcancelled = () => {
        this.props.history.goBack();
      }
  
  
     checkoutcontinued = () => {
      this.props.history.replace('/checkout/contact-data');
      }
   
    render() {
        return (
            <div>
              <CheckoutSummary ingredients = {this.state.ingredients}
               checkoutcancelled = {this.checkoutcancelled}
               checkoutcontinued = {this.checkoutcontinued}/> 
                <Route path = {this.props.match.path + '/contact-data'}
                 render = {(props) => (<ContactData ingredients = {this.state.ingredients} price = {this.state.totalprice}{...props}/>)}/> 

            </div>
        )
    }
}

export default Checkout;

