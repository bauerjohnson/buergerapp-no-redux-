import React from 'react';

import classes from './Order.css';

const Order = (props) => {
    const ingredients = [];

    for(let ingredientNAME in props.ingredients) {
        ingredients.push(
            {
                name : ingredientNAME,
                amount : props.ingredients[ingredientNAME]
            }
        )
    }
    const ingredientOutput = ingredients.map(ig => {
        return <span
        style = {{
            textTransform : 'capitalize',
            display : 'inline-block',
            margin : '0 8px',
            border : '1px solid #ccc',
            padding : '5px'
        }}   //we cud also use css class here
         key = {ig.name}>{ig.name} ({ig.amount})
         </span>
    })
    return (
        <div className = {classes.Order}>
              <p>ingredients : {ingredientOutput}</p>
             <p>Price : <strong> &#8358; {(props.price)}</strong></p>
        </div>
    )
}

export default Order;
