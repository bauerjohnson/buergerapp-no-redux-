import React from 'react';

import classes from './Burger.css';
import BurgerIngre from './BurgerIngre/BurgerIngre';

const burger = (props) => {
    let transformingre = Object.keys(props.ingredients)
    .map(igkey => {
        //first turn it to array and map it into array
        return [...Array(props.ingredients[igkey])]
        //and then map it into our ingre
       .map((_, e) => {
        return <BurgerIngre key = {igkey + e} type = {igkey}/>
      
        } )
       })
    
    .reduce((arr, el) => { 
        return arr.concat(el)
    }, []);
    console.log(transformingre);
    if (transformingre.length === 0) {
        transformingre = <p>pls start adding ingredients!</p>
    }

    


return (
    <div className={classes.Burger}>
     <BurgerIngre type="bread-top" />
     {/* <BurgerIngre type="butter" />
     <BurgerIngre type="meat" /> */}
     {transformingre}
     <BurgerIngre type="bread-bottom" />
    </div>
)
}

export default burger;