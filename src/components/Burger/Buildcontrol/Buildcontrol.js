import React from 'react';

import classes from './Buildcontrol.css';

const buildcontrol = (props) => (
    <div className = {classes.BuildControl}>
      

<button className = {classes.More} onClick = {props.added}>Add</button>
<button className = {classes.Less} 
onClick = {props.remove}
 disabled = {props.disabled}>Remove</button>
 <div className = {classes.Label}>{props.label}</div>
</div>
);




export default buildcontrol;