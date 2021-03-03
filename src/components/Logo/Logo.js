import React from 'react';

import burgerlogo from './../../assets/bl.png';
import classes from './Logo.css';

const logo = (props) => (
<div className = {classes.Logo} >

<img src = {burgerlogo} alt = 'burger'/>
</div>
);

export default logo;