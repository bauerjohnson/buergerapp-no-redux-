import React from 'react';

import Logo from '../../../components/Logo/Logo';
import Navigationitems from '../NavigationITEMS';
import classes from './Sidedrawer.css';
import  Backdrop from '../../UI/Backdrop/Backdrop'; 
import Aux from '../../../hoc/Auxilliary';


const sidedrawer = (props) => {
let attachclasses = [classes.sidedrawer, classes.close];
 if (props.open) {
   attachclasses = [classes.sidedrawer, classes.open];
 }
return (
  <Aux>
  <Backdrop show = {props.open} clicked = {props.closed}/>
  <div className = {attachclasses.join(' ')}>
      <div className = {classes.logo}>
      <Logo/>  

      </div>
   
    <nav>
        <Navigationitems />
        </nav> 
  </div>
  </Aux>
)

}


export default sidedrawer;