import React from 'react';

import classes from './Toolbar.css';
import Logo from './../../Logo/Logo';
import Navigationitems from './../../NavigationITEMS/NavigationITEMS';
import Toggle from '../../NavigationITEMS/Sidedrawer/togglebutton/togglebutton';

const toolbar = (props) => (
    <header className = {classes.Toolbar}>
<Toggle clicked = {props.drawer}/>

<div className = {classes.logo}>

<Logo/>
</div>

<nav className = {classes.desktop}>
        <Navigationitems/>
    </nav>
    </header>
   
);

export default toolbar;
