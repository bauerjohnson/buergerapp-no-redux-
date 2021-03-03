import React from 'react'

import Burger from '../Burger/Burger';
import Button from '../UI/Button/Button';
import classes from './CheckoutSummary.css';

const CheckoutSummary = (props) => {
    return (
        <div className = {classes.CheckoutSummary}>
        <h1>we hope it tastes well!</h1>
        <div style = {{width : '100%', margin : 'auto'}}>
        <Burger ingredients = {props.ingredients}/>
      </div>
      <Button btnType = 'Danger'
       clicked = {props.checkoutcancelled}>Cancel</Button>
      <Button btnType = 'Success' 
      clicked = {props.checkoutcontinued}>Continue</Button>
        </div>
    )
}

export default CheckoutSummary;
