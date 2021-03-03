import React from 'react';

import classes from './togglebutton.css';


const togglebutton = (props) => (
    <div className = {classes.togglebutton } onClick = {props.clicked}>
       <div>&#9776;</div> 
       
       
    </div>
);

export default togglebutton; 