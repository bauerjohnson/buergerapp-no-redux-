import React from 'react';

import classes from './NavigationITEMS.css';
import Navigationitem from './NavigationITEM';


const navigationitems = () => (
    <ul className = {classes.navigationitems}>
       <Navigationitem link = '/' exact> BURGER BUIDER </Navigationitem>
       <Navigationitem link = '/Orders'>ORDERS </Navigationitem>
    </ul>
); 

export default navigationitems;