import React, { Component } from 'react'
import Order from './Order';
import axios from '../../axios-order';
import withErrorhandler from '../Witherrorhandler/Witherrorhandler';


 class Orders extends Component {
     state = {
         orders : [],
         loading : true
     }

     componentDidMount () {
         axios.get('./orders.json')
         .then(res => {
            const fetched0rders = [];
            for (let key in res.data) {
              //fetched0rders.push(res.data[key]) to not lose the ids which are our keys here, we do the below instead
              fetched0rders.push({
                  ...res.data[key],
                  id : key
              });
            }
            this.setState({loading : false, orders : fetched0rders}) 
         })
         .catch(err => {
             this.setState({loading : false})
         })
     }
    render() {
        return (
            <div>
               {this.state.orders.map(order => {
                   return (
                   <Order
                   key = {order.id}
        ingredients = {order.ingredients}
        price = {order.price}/>
                   )
               })} 
            </div>
        )
    }
}

export default withErrorhandler(Orders, axios)
