import React from 'react';

import Buildcontrol from '../Buildcontrol/Buildcontrol';
import classes from './Buildcontrols.css';

const controls = [
    {label : 'salad', type : 'salad'},
    {label : 'bacon', type : 'bacon'},
    {label : 'butter', type : 'butter'},
    {label : 'meat', type : 'meat'}
    
]

const buildcontrols = (props) =>  (
    <div className = {classes.Buildcontrols}>
        <p>current price : <strong>{props.price.toFixed(2)}</strong></p>
  {controls.map(ctrl => (
     <Buildcontrol
      key = {ctrl.label} 
      label ={ctrl.label}
      remove = {() => props.ingredientRemove(ctrl.type)}
      added = {() => props.ingredientadded(ctrl.type)} 
       disabled = {props.disableRemove[ctrl.type]}/>
  ))}

  <button className = {classes.OrderButton} 
  disabled = {!props.Purchaseable}
  onClick = {props.ordered}>ORDER</button>

    </div>

)

export default buildcontrols;