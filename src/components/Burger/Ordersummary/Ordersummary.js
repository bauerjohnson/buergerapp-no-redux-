import React, { Component } from 'react';

import Aux from '../../../hoc/Auxilliary';
import Button from './../../UI/Button/Button';

class OrderSummary extends Component {
  componentDidUpdate() {  //this cud be a functionsl compoent, not necessarily a class
    console.log('[ordersummary] willupdate')
}
  render () {
    const ingredientsummary = Object.keys(this.props.ingredients)
.map(igkey => {
return <li key = {igkey}><span style={{textTransform: 'uppercase'}}>{[igkey]}</span>: {this.props.ingredients[igkey]}</li>
})
    return (
      <Aux>
      <h3>your order</h3>
      <p>a delicious order with the ffg ingre</p>
      <ul >
     {ingredientsummary}
      </ul>
   <p>continue to checkout</p>
   <p><strong>TOTALPRICE = {this.props.price.toFixed(2)}</strong></p>
   <Button btnType = 'Danger'clicked = {this.props.purchasecontinue}>CONTINUE</Button>
   <Button btnType = 'Success' clicked = {this.props.purchasecancel}>CANCEL</Button>
     </Aux>
    )
  }
}

export default OrderSummary;
